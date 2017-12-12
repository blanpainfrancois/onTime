using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OnTimeBackend.Data;
using Microsoft.AspNetCore.Authorization;
using IdentityServer4.AccessTokenValidation;
using Microsoft.EntityFrameworkCore;
using OnTimeBackend.Models.AccountViewModels;
using OnTimeBackend.Models;
using Microsoft.AspNetCore.Identity;
using Uber4Cream.Data.DatabaseModels;
using System.Collections.ObjectModel;

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
        public async Task<IActionResult> Getemployers()
        {

            var employers = context.employers;

            if(employers != null)
            {
                return new JsonResult(employers);
            }
                   

            return BadRequest();
        }


        [HttpPost("subscribe employee to employer")]
        public async Task<IActionResult> employeetoemployer(int id)
        {
            var tokenuser = await usermanager.GetUserAsync(User);

            var employer = await context.employers.Where(e => e.IdentityID == tokenuser.Id).FirstOrDefaultAsync();
            var employee = await context.employees.Where(em => em.EmployeeID == id).FirstOrDefaultAsync();
            
            if(employee != null && employer != null)
            {
                employer.employees.Add(employee);
                await context.SaveChangesAsync();

                return Ok();
            }
            

            return BadRequest();
            
        }

        // GET: api/Employers/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetEmployer([FromRoute] int id)
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

            return Ok(employer);
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

        

        private bool EmployerExists(int id)
        {
            return context.employers.Any(e => e.EmployerID == id);
        }
    }
}