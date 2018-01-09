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

namespace OnTimeBackend.Controllers
{
    [Authorize(AuthenticationSchemes = IdentityServerAuthenticationDefaults.AuthenticationScheme, Policy = "Access Resources")]
    [Produces("application/json")]
    [Route("api/Metrics")]
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
        [HttpGet("getTopReasons")]
        public async Task<IActionResult> getTopReasons()
        {
            var top = await context.issues.GroupBy(i => i.reason.ReasonID).OrderBy()


            return BadRequest();
        }

    }
}