using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using IdentityServer4.AccessTokenValidation;
using OnTimeBackend.Data;
using Microsoft.AspNetCore.Identity;
using OnTimeBackend.Models;
using Microsoft.EntityFrameworkCore;
using Uber4Cream.Data.DatabaseModels;

namespace OnTimeBackend.Controllers
{
    [Authorize(AuthenticationSchemes = IdentityServerAuthenticationDefaults.AuthenticationScheme, Policy = "Access Resources")]
    [Route("api/[controller]")]
    public class MetricsController : Controller
    {
        private readonly ApplicationDbContext context;
        private readonly UserManager<ApplicationUser> usermanager;

        public MetricsController(ApplicationDbContext context, UserManager<ApplicationUser> usermanager)
        {
            this.context = context;
            this.usermanager = usermanager;
        }


        [HttpGet("getNumberofEmployeesFromEmployer")]
        public async Task<IActionResult> getNumberemployees()
        {
            var tokenuser = await usermanager.GetUserAsync(User);
            var employer = await context.employers.Where(em => em.IdentityID == tokenuser.Id).Include(em => em.employees).FirstOrDefaultAsync();

            if (employer.employees != null) {

                return Ok(employer.employees.Count);

            }

            return BadRequest();
        }
        [HttpGet("GetTopReason")]
        public async Task<IActionResult> getTopReasons()
        {
            var tokenuser = await usermanager.GetUserAsync(User);
            var employer = await context.employers.Where(e => e.IdentityID == tokenuser.Id).Include(e => e.employees).ThenInclude(i => i.issues).ThenInclude(r => r.reason).FirstOrDefaultAsync();

            List<Reason> reasons = new List<Reason>();

            if (employer != null)
            {
                foreach (var employee in employer.employees)
                {
                    foreach (var issue in employee.issues)
                    {
                        reasons.Add(issue.reason);
                    }
                }


                var group = reasons.GroupBy(tempreason => tempreason.reason);
                var sorted = group.OrderByDescending(g => g.Count());

                var reason = sorted.First().First();

                if(reason != null)
                {
                    return Ok(reason);

                }


            }





            return BadRequest();
        }

        [HttpGet("GetCostofHoursToLate")]
        public async Task<IActionResult> GetCostofHoursToLate()
        {
            var tokenuser = await usermanager.GetUserAsync(User);
            var employer = await context.employers.Where(e => e.IdentityID == tokenuser.Id).Include(e => e.employees).ThenInclude(i => i.issues).FirstOrDefaultAsync();

            TimeSpan total = new TimeSpan();

            if(employer != null)
            {
                foreach (var employee in employer.employees)    
                {

                    foreach (var issue in employee.issues)
                    {
                        
                        total = total.Add(issue.timespan);
                    }
                }



                var mul = Math.Round(((float)1/(float)3600)*(employer.HourCost * total.TotalSeconds), 2);
                return Ok(mul);

            }
            
            

            return BadRequest();
        }



    }
}