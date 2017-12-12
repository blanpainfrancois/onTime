﻿using System.Collections.Generic;
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
                var employee = await context.employees.Where(em => em.IdentityID == useridentity.Id)
                    .Include(em => em.issues)
                        .ThenInclude(issue => issue.reason)
                    .Include(em => em.issues)
                        .ThenInclude(issue => issue.location)
                    .Include(em => em.employer)
                    .Include(em => em.address).FirstOrDefaultAsync();



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



        private bool EmployeeExists(int id)
        {
            return context.employees.Any(e => e.EmployeeID == id);
        }






    }
}