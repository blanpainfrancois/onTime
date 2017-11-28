using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Uber4Cream.Data.DatabaseModels;
using OnTimeBackend.Data;
using IdentityServer4.AccessTokenValidation;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
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
        public IEnumerable<Employee> Getemployees()
        {
            return context.employees;
        }

        [HttpGet("employeefromtoken")]
        public async Task<IActionResult> EmployeeFromToken()
        {
            var useridentity = await usermanager.GetUserAsync(User);
            if(useridentity != null)
            {
                var employee = await context.employees.Where(em => em.IdentityID == useridentity.Id).FirstOrDefaultAsync();

                if(employee != null)
                {
                    var tempemployer = await context.employers.Where(emp => emp.EmployerID == employee.EmployeeID).FirstOrDefaultAsync();
                    if(tempemployer != null)
                    {
                        employee.employer = await context.employers.Where(emp => emp.EmployerID == employee.EmployeeID).FirstOrDefaultAsync();

                    }



                    return new JsonResult(employee);
                }
            }

            return BadRequest();
        }


        // GET: api/Employees/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetEmployee([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var employee = await context.employees.SingleOrDefaultAsync(m => m.EmployeeID == id);

            if (employee == null)
            {
                return NotFound();
            }

            return Ok(employee);
        }

        // PUT: api/Employees/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEmployee([FromRoute] int id, [FromBody] Employee employee)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != employee.EmployeeID)
            {
                return BadRequest();
            }

            context.Entry(employee).State = EntityState.Modified;

            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployeeExists(id))
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

        // DELETE: api/Employees/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmployee([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var employee = await context.employees.SingleOrDefaultAsync(m => m.EmployeeID == id);
            if (employee == null)
            {
                return NotFound();
            }

            context.employees.Remove(employee);
            await context.SaveChangesAsync();

            return Ok(employee);
        }

        private bool EmployeeExists(int id)
        {
            return context.employees.Any(e => e.EmployeeID == id);
        }



    }
}