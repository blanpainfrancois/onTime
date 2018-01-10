using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OnTimeBackend.Data;
using Uber4Cream.Data.DatabaseModels;
using Microsoft.AspNetCore.Authorization;
using IdentityServer4.AccessTokenValidation;
using OnTimeBackend.Models.AccountViewModels;
using OnTimeBackend.Models;
using Microsoft.AspNetCore.Identity;
using System.Net.Http;
using Newtonsoft.Json.Linq;
using System.Runtime.Serialization;
using OnTimeBackend.Data.DatabaseModels;
using QuickType;

namespace OnTimeBackend.Controllers
{
    [Produces("application/json")]
    [Route("api/Employers")]
    [Authorize(AuthenticationSchemes = IdentityServerAuthenticationDefaults.AuthenticationScheme, Policy = "Access Resources")]

    public class EmployersController : Controller
        {
            private readonly ApplicationDbContext context;
            private readonly UserManager<ApplicationUser> usermanager;

            public EmployersController(ApplicationDbContext context, UserManager<ApplicationUser> usermanager)
            {
                this.context = context;
                this.usermanager = usermanager;

            }


            [HttpGet]
            public async Task<IActionResult> GetEmployer()
        {
            var tokenuser = await usermanager.GetUserAsync(User);
            var employer = await context.employers.Where(em => em.IdentityID == tokenuser.Id).FirstOrDefaultAsync();

            if(employer != null)
            {
                return Ok(employer);
            }
            return BadRequest();
            
        }

      
            [HttpGet("getemployers")]
            public async Task<IActionResult> Getemployers()
                {

                    var employers = await context.employers.ToListAsync();

                    List<ReturnEmployers> returnemployers = new List<ReturnEmployers>();

                    foreach (var employer in employers)
                    {
                        returnemployers.Add(new ReturnEmployers
                        {
                            CreatedAt = employer.CreatedAt,
                            EmployerID = employer.EmployerID,
                            IdentityID = employer.IdentityID,
                            Name = employer.Name,
                            Username = employer.Username
                        });
                    }

                    return new JsonResult(returnemployers);
                }

            

            [HttpPost("employeetoemployer")]
            public async Task<IActionResult> employeetoemployer(int employeeid)
            {
            var employerIdentity = await usermanager.GetUserAsync(User);
            var employer = await context.employers.Where(e => e.IdentityID == employerIdentity.Id).FirstOrDefaultAsync();
            var employee = await context.employees.Where(i => i.EmployeeID == employeeid).FirstOrDefaultAsync();

            if(employee != null && employer != null)
            {

                employee.employer = employer;
                await context.SaveChangesAsync();

                return Ok();
            }
            
            return BadRequest();

            }

        [HttpDelete("employeetoemployer")]
        public async Task<IActionResult> deleteemployeetoemployer(int employeeid)
        {
            var employerIdentity = await usermanager.GetUserAsync(User);
            var employer = await context.employers.Where(e => e.IdentityID == employerIdentity.Id).Include(em => em.employees).FirstOrDefaultAsync();

            if (employer != null)
            {
                var employee = employer.employees.Where(i => i.EmployeeID == employeeid).FirstOrDefault();
                if(employee != null)
                {
                    employer.employees.Remove(employee);
                    await context.SaveChangesAsync();
                    return Ok("employee removed from employers subscribtionlist");
                }
                if(employee == null)
                {
                    
                    return Ok("employee has not been subscribed too employer");
                }
            }


                return BadRequest();
        }






            // DELETE: api/Employers/5
        [HttpDelete("{id}")]
            public async Task<IActionResult> DeleteEmployer([FromRoute] int id)
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }



                var employer = await context.employers.SingleOrDefaultAsync(m => m.EmployerID == id);

                if (employer == null)
                {
                    return NotFound();
                }


           

                context.employers.Remove(employer);
                await context.SaveChangesAsync();


                return Ok(employer);
            }

          

            [HttpPost("postaddress")]
            public async Task<IActionResult> postaddress( [FromBody] Address address)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var employerIdentity = await usermanager.GetUserAsync(User);
            var employer = await context.employers.Where(e => e.IdentityID == employerIdentity.Id).FirstOrDefaultAsync();

            if(employer != null)
            {

                employer.address = address;

                await context.SaveChangesAsync();

                return Ok();

            }

            return BadRequest();
        }

            
        [HttpGet("getsubcribedemployees")]
        public async Task<IActionResult> getsubcribedemployees()
        {

            var tokenuser = await usermanager.GetUserAsync(User);
            var employer = await context.employers.Where(em => em.IdentityID == tokenuser.Id).Include(em => em.employees).ThenInclude(ee => ee.issues).ThenInclude(i => i.reason).FirstOrDefaultAsync();

            if(employer.employees != null)
            {
                return Ok(employer.employees);
            }
            if(employer.employees == null)
            {
                return Ok("no employees assigned");
            }
            return BadRequest();
        }

        [HttpGet("GetissuesFromEmployee")]
        public async Task<IActionResult> GetissuesFromEmployee(int employeeid)
        {

          //  var tokenuser = await usermanager.GetUserAsync(User);
          //  var employer = await context.employers.Where(em => em.IdentityID == tokenuser.Id).Include(em => em.employees).ThenInclude(ee => ee.issues).ThenInclude(i => i.reason).FirstOrDefaultAsync();
            var employee = await context.employees.Where(e => e.EmployeeID == employeeid).Include(i => i.issues).ThenInclude(i => i.reason).FirstOrDefaultAsync();


            if(employee != null)
            {
                return Ok(employee);
            }
            
            return BadRequest("no employee with such ID");
        }


        [HttpGet("GetAllOpenIssues")]
        public async Task<IActionResult> GetAllOpenIssues()
        {

            var tokenuser = await usermanager.GetUserAsync(User);
            var issues = await context.issues.Where(i => i.IssueClosed == false).Include(i => i.reason).Include(i => i.employee).ThenInclude(e => e.employer).ToListAsync();
            

            if (issues != null)
            {
                return Ok(issues);
            }

            return BadRequest("no employee with such ID");
        }


        private bool EmployerExists(int id)
            {
                return context.employers.Any(e => e.EmployerID == id);

            }


        }
    }
