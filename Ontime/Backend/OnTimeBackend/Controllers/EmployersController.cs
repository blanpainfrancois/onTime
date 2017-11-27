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

        // GET: api/Employers
        [HttpGet]
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

        public async Task<IActionResult> employeetoemployer(string id)
        {
            var employeeIdentity = await usermanager.GetUserAsync(User);
            var employee = context.employees.Where(e => e.IdentityID == employeeIdentity.Id).FirstOrDefault();
            var employer = context.employers.Where(e => e.IdentityID == id).FirstOrDefault();


            if(employee != null)
            {
               
                    employer.employees = new List<Employee>();
                
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

        // PUT: api/Employers/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEmployer([FromRoute] int id, [FromBody] Employer employer)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != employer.EmployerID)
            {
                return BadRequest();
            }

            context.Entry(employer).State = EntityState.Modified;

            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployerExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Employers
        [HttpPost]
        public async Task<IActionResult> PostEmployer([FromBody] Employer employer)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            context.employers.Add(employer);
            await context.SaveChangesAsync();

            return CreatedAtAction("GetEmployer", new { id = employer.EmployerID }, employer);
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