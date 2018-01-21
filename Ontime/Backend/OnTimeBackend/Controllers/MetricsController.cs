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

        [HttpGet("gettopweekday")]
        public async Task<IActionResult> gettopweekday()
        {
            var tokenuser = await usermanager.GetUserAsync(User);
            var employer = await context.employers.Where(e => e.IdentityID == tokenuser.Id).Include(e => e.employees).ThenInclude(i => i.issues).ThenInclude(r => r.reason).FirstOrDefaultAsync();

            List<DayOfWeek> weekdays = new List<DayOfWeek>();

            if (employer.employees != null)
            {

                foreach (var employee in employer.employees)
                {
                    foreach (var issue in employee.issues)
                    {
                        weekdays.Add(issue.IssueCreated.DayOfWeek);
                    }
                }

                var group = weekdays.GroupBy(weekday => weekday);
                var sorted = group.OrderByDescending(g => g.Count());


                String[] t = new String[] { sorted.First().First().ToString() };


                return Ok(t);

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

        [HttpGet("Getopenissues")]
        public async Task<IActionResult> Getopenissuesofemployer()
        {
            var tokenuser = await usermanager.GetUserAsync(User);
            var employer = await context.employers.Where(e => e.IdentityID == tokenuser.Id)
                .Include(e => e.employees)
                    .ThenInclude(i => i.issues)
                         .ThenInclude(r => r.reason) 
                         .FirstOrDefaultAsync();
            
            

            List<Issue> openimployees = new List<Issue>();

            if (employer != null)
            {

                foreach (var employee in employer.employees)
                {
                    foreach (var issue in employee.issues)
                    {
                        if(issue.IssueClosed == false)
                        {
                            openimployees.Add(issue);
                        }
                    }

                    

                }

               

                    foreach (var issue in openimployees)
                    {
                        var now = DateTime.Now;
                        issue.timespan = now.Subtract(issue.IssueCreated);
                    }

                   return Ok(openimployees);
                

                

            }
            return BadRequest();
        }


        [HttpGet("Getfromdatafromperiod")]
        public async Task<IActionResult> getdatafromperiod(DateTime startdate, DateTime enddate)
        {
            Dictionary<string, int> data = new Dictionary<string, int>();

            var token = await usermanager.GetUserAsync(User);
            var employer = await context.employers.Where(e => e.IdentityID == token.Id).Include(e => e.employees).ThenInclude(e => e.issues).FirstOrDefaultAsync();
            
            if(employer != null)
            {
                List<DateTime> dateslist = new List<DateTime>();

                foreach (var employee in employer.employees)
                {
                    foreach (var issue in employee.issues)
                    {
                        //bezien of een datum in de range ligt.
                        if (issue.IssueCreated.Ticks > startdate.Ticks && issue.IssueCreated.Ticks < enddate.Ticks)
                        {
                            dateslist.Add(issue.IssueCreated);
                        }
                        
                    }
                }

                foreach (var date in dateslist)
                {
                    if (!data.ContainsKey(date.Month.ToString()+"-"+date.Year.ToString()))
                    {
                        data.Add(date.Month.ToString() + "-" + date.Year.ToString(), 1);
                    }
                    else
                    {
                        var item = data[date.Month.ToString() + "-" + date.Year.ToString()] +1;
                        data.Remove(date.Month.ToString() + "-" + date.Year.ToString());
                        data.Add(date.Month.ToString() + "-" + date.Year.ToString(), item);
                    }
              
                }

                var tosort = data.Reverse().ToList();
                
                return Ok(tosort);
            }




            return BadRequest();
        }


        [HttpGet("Getshareemployer")]
        public async Task<IActionResult> Getshareemployer()
        {
            var tokenuser = await usermanager.GetUserAsync(User);
            var employer = await context.employers.Where(e => e.IdentityID == tokenuser.Id)
                .Include(e => e.employees).FirstOrDefaultAsync();

            List<Issue> issuelist = new List<Issue>();

            foreach (var employee in employer.employees)
            {
                issuelist.Add(await context.issues.Where(i => i.employee == employee).FirstOrDefaultAsync());
            }


            var group = issuelist.GroupBy(i => i.employee);

            return Ok(group);
            

            return BadRequest();
        }
    }
}