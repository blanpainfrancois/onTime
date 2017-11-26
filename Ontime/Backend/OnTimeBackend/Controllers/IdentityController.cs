using OnTimeBackend.Models;
using OnTimeBackend.Models.AccountViewModels;
using OnTimeBackend.Services;
using IdentityModel;
using IdentityServer4.AccessTokenValidation;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using Uber4Cream.Models.AccountViewModels;
using Microsoft.AspNetCore.Cors;
using System.Net;
using System;
using Uber4Cream.Data.DatabaseModels;
using OnTimeBackend.Data;

namespace OnTimeBackend.Controllers
{
    /// <summary>
    /// Identity Web API controller.
    /// </summary>
    /// 
    [Route("api/[controller]")]
    // Authorization policy for this API.
    [Authorize(AuthenticationSchemes = IdentityServerAuthenticationDefaults.AuthenticationScheme, Policy = "Manage Accounts")]

    public class IdentityController : Controller
    {
        private readonly UserManager<ApplicationUser> usermanager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly IEmailSender _emailSender;
        private readonly ILogger _logger;
        private readonly ApplicationDbContext context;


        public IdentityController(
            UserManager<ApplicationUser> userManager,
            RoleManager<IdentityRole> roleManager,
            SignInManager<ApplicationUser> signInManager,
            IEmailSender emailSender,
            ILogger<IdentityController> logger, ApplicationDbContext context)
        {
            usermanager = userManager;
            _roleManager = roleManager;
            _signInManager = signInManager;
            _emailSender = emailSender;
            _logger = logger;
            this.context = context;


        }

        /// <summary>
        /// Gets all the users from an role.
        /// </summary>
        /// <returns>Returns all the users</returns>
        // GET identity/GetAll
        [HttpGet("GetAll")]
        [AllowAnonymous]
        public async Task<IActionResult> GetAllUsersFromRole(string role)
        {

            var rolefound = await _roleManager.FindByNameAsync(role);
            var users = await usermanager.GetUsersInRoleAsync(rolefound.Name);

            foreach (var user in users)
            {
                user.PasswordHash = "";
            }

            return new JsonResult(users);
        }



        //CreatesPostRole
        [HttpPost("CreateRole")]
        [AllowAnonymous]
        public async Task<IActionResult> CreateRole([FromBody] CreateRoleModel model)
        {

            var result = await _roleManager.CreateAsync(new IdentityRole(model.Role));

            return new JsonResult(result);

        }

        /// <summary>
        /// Registers a new user.
        /// </summary>
        /// <returns>IdentityResult</returns>
        // POST: api/identity/Create
        [HttpPost("Create")]
        [AllowAnonymous]
        public async Task<IActionResult> Create([FromBody]CreateViewModel model)
        {

            var user = new ApplicationUser
            {
                GivenName = model.givenName,
                FamilyName = model.familyName,
                AccessFailedCount = 0,
                Email = model.email,
                EmailConfirmed = false,
                LockoutEnabled = true,
                NormalizedEmail = model.username.ToUpper(),
                NormalizedUserName = model.username.ToUpper(),
                TwoFactorEnabled = false,
                UserName = model.username
            };


            if (!model.password.Equals(model.passwordvalidate))
            {
                return BadRequest("Passwords don't match");
            }




            var result = await usermanager.CreateAsync(user, model.password);

            if (result.Succeeded)
            {
                if (model.role == "employer")
                {
                    var roleresult = await usermanager.AddToRoleAsync(user, "employer");

                    context.employers.Add(new Employer
                    {
                        CreatedAt = DateTime.Now,
                        Username = model.username,
                        Name = model.givenName + " " + model.familyName,
                        IdentityID = user.Id,
                    });

                    await context.SaveChangesAsync();

                    if (roleresult.Succeeded)
                    {
                        return Ok();
                    }
                }
                else if (model.role == "employee")
                {
                    var roleresult = await usermanager.AddToRoleAsync(user, "employee");

                    context.employees.Add(new Employee
                    {
                        Givenname = model.givenName,
                        Username = model.username,
                        Familyname = model.familyName,
                        IdentityID = user.Id
                    });

                    await context.SaveChangesAsync();

                    if (roleresult.Succeeded)
                    {
                        return Ok();
                    }
                }
            }
            
            return new BadRequestResult();


        }

        [AllowAnonymous]
        [HttpPost("CreateEmployee")]
        public async Task<IActionResult> CreateEmployer([FromBody]CreateEmployeeModel model)
        {

            var user = new ApplicationUser
            {
                UserName = model.username,
                GivenName = model.givenname,
                FamilyName = model.familyname,
                Email = model.email
            };

            

            var result = await usermanager.CreateAsync(user, model.password);
            var roleresult = await usermanager.AddToRoleAsync(user, "employer");
            
            if(result.Succeeded && roleresult.Succeeded)
            {

                context.employees.Add(new Employee
                {
                    IdentityID = user.Id,
                    Givenname = model.givenname,
                    Familyname = model.familyname
                });

                await context.SaveChangesAsync();

                return Ok();
            }
            
           
            return BadRequest();


        }



        /// <summary>
        /// Deletes a user.
        /// </summary>
        /// <returns>IdentityResult</returns>
        // POST: api/identity/Delete
        [HttpPost("Delete")]
        public async Task<IActionResult> Delete([FromBody]string username)
        {
            var user = await usermanager.FindByNameAsync(username);

            var result = await usermanager.DeleteAsync(user);

            return new JsonResult(result);
        }

        private async Task addToRole(string userName, string roleName)
        {
            var user = await usermanager.FindByNameAsync(userName);
            await usermanager.AddToRoleAsync(user, roleName);
        }

        private async Task addClaims(string userName)
        {
            var user = await usermanager.FindByNameAsync(userName);
            var claims = new List<Claim> {
                new Claim(type: JwtClaimTypes.GivenName, value: user.GivenName),
                new Claim(type: JwtClaimTypes.FamilyName, value: user.FamilyName),
            };
            await usermanager.AddClaimsAsync(user, claims);
        }
    }
}