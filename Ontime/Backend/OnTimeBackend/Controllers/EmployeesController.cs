using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Uber4Cream.Data.DatabaseModels;
using OnTimeBackend.Data;
using IdentityServer4.AccessTokenValidation;
using Microsoft.AspNetCore.Authorization;
using OnTimeBackend.Models;
using Microsoft.AspNetCore.Identity;
using System.Net.Http;
using QuickType;
using System;

namespace Uber4Cream.Controllers
{
    [Authorize(AuthenticationSchemes = IdentityServerAuthenticationDefaults.AuthenticationScheme, Policy = "Access Resources")]
    [Produces("application/json")]
    [Route("api/Employees")]
    public class EmployeesController : Controller
    {
        private readonly ApplicationDbContext context;
        private readonly UserManager<ApplicationUser> usermanager;

        public EmployeesController(ApplicationDbContext context , UserManager<ApplicationUser> usermanager)
        {
            this.context = context;
            this.usermanager = usermanager;
        }

        // GET: api/Employees
        [HttpGet]
        public async Task<IActionResult> getemployees()
        {

            return Ok(await context.employees.ToListAsync());

        }

        [HttpGet("employeefromtoken")]
        public async Task<IActionResult> EmployeeFromToken()
        {
            var useridentity = await usermanager.GetUserAsync(User);
            var employee = await context.employees.Where(em => em.IdentityID == useridentity.Id).Include(i => i.employer).FirstOrDefaultAsync();
                   

            if (useridentity != null)
            {
                if (employee != null)
                {
                    return Ok(employee);
                }
            }

            return BadRequest();
        }

       
        [HttpDelete]
        public async Task<IActionResult> DeleteEmployee()
        {

            var user = await usermanager.GetUserAsync(User);

            if(user != null)
            {
                var employee = await context.employees.SingleOrDefaultAsync(m => m.IdentityID == user.Id);
                if (employee == null)
                {
                    return NotFound();
                }

                context.employees.Remove(employee);

                await usermanager.DeleteAsync(user);
                await context.SaveChangesAsync();
                return Ok();


            }

            return BadRequest();


        }

        [HttpGet("getopenissue")]
        public async Task<IActionResult> GetOpenIssue()
        {
            var useridentity = await usermanager.GetUserAsync(User);
            var employee = await context.employees.Where(em => em.IdentityID == useridentity.Id).Include(i => i.issues).ThenInclude(i => i.reason).FirstOrDefaultAsync();

            var issue = employee.issues.Where(i => i.IssueClosed == false).FirstOrDefault();

            

            if(issue == null)
            {
                return BadRequest("no open requests");
            }

            issue.employee = null;

            if(issue != null)
            {
                return Ok(issue);
            }
            return BadRequest();


        }

        [HttpGet("getlocationfromaddressfromtoken")]
        public async Task<IActionResult> GetLocation()
        {
            var tokenidentity = await usermanager.GetUserAsync(User);

            var employee = await context.employees.Where(e => e.IdentityID == tokenidentity.Id).Include(e => e.employer).ThenInclude(em => em.address).FirstOrDefaultAsync();


            if (employee.employer.address != null)
            {

                HttpClient client = new HttpClient();

                string baseurl = "https://maps.googleapis.com/maps/api/geocode/json?address=";
                string apikey = "&key=AIzaSyBNjw8WH4iP9ogdl7Ovy5asQeGJP4RNiqg";


                var response = await client.GetStringAsync(baseurl + employee.employer.address.GetAddress() + apikey);


                //CUSTOM GOOGLEAPI FACTORY TO GETLOCATION OF EMPLOYER FROM ADDRESS
                GoogleApi res = GoogleApi.FromJson(response);


                return Ok(res.Results[0].Geometry.Location);

            }

            if(employee.employer == null)
            {
                return BadRequest("Employee was not assigned to en employer ");

            }
            if (employee.employer.address == null)
            {
                return BadRequest("assigned employer doesn't have an address");

            }

            return BadRequest();

        }

        [HttpPut("closeissue")]
        public async Task<IActionResult> closeissue(int id)
        {
            var useridentity = await usermanager.GetUserAsync(User);
            var employee = await context.employees.Where(em => em.IdentityID == useridentity.Id).Include(i => i.employer).Include(i => i.issues).FirstOrDefaultAsync();

            if(employee != null)
            {

                var tempissue = employee.issues.Where(i => i.IssueID == id).FirstOrDefault();
                if(tempissue != null)
                {
                    tempissue.IssueClosed = true;
                    tempissue.dateclosed = DateTime.Now;
                    await context.SaveChangesAsync();
                    return Ok();
                }

                else
                {
                    return BadRequest("Employee has not such issue with provied ");
                }

            }


            return BadRequest();
        }

    }
}