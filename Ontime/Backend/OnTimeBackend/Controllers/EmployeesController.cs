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
            var employee = await context.employees.Where(em => em.IdentityID == useridentity.Id).Include(i => i.employer).FirstOrDefaultAsync();
            var issues = await context.issues.Where(i => i.employee == employee).Where(i => i.IssueClosed == false).Include(r => r.reason).FirstOrDefaultAsync();


            if (useridentity != null)
            {
                if (employee != null && issues != null)
                {
                    return Ok(issues);
                }
                
                if (employee == null && issues == null)
                {
                    return Ok("No open issue");
                }
            }

            return BadRequest();
        }




    }
}