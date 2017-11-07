using Uber4CreamBackend.Models;
using Uber4CreamBackend.Models.AccountViewModels;
using Uber4CreamBackend.Services;
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
using Uber4CreamBackend.Data;

namespace Uber4CreamBackend.Controllers
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
        private readonly UserManager<ApplicationUser> _userManager;
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
            _userManager = userManager;
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
        [HttpPost("GetAll")]
        [AllowAnonymous]
        public async Task<IActionResult> GetAllUsersFromRole( [FromBody] CreateRoleModel model )
        {

            var role = await _roleManager.FindByNameAsync(model.Role);
            var users = await _userManager.GetUsersInRoleAsync(role.Name);

            foreach(var user in users)
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
            try
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
                    return new JsonResult("Passwords don't match");
                }

                var result = await _userManager.CreateAsync(user, model.password);
                



                if (result.Succeeded && model.role == "Ice Maker")
                {

                    var newUser = await _userManager.FindByNameAsync(user.UserName);
                    // Assigns the administrator role.
                    await _userManager.AddToRoleAsync(newUser, "IceMaker");
                    // Assigns claims.
                    var claims = new List<Claim> {
                    new Claim(type: JwtClaimTypes.GivenName, value: user.GivenName),
                    new Claim(type: JwtClaimTypes.FamilyName, value: user.FamilyName),
                     };
                    await _userManager.AddClaimsAsync(newUser, claims);
                    
                }
                else if (result.Succeeded && model.role == "user")
                {
                    var newUser = await _userManager.FindByNameAsync(user.UserName);
                    // Assigns the administrator role.
                    await _userManager.AddToRoleAsync(newUser, "user");
                    // Assigns claims.
                    var claims = new List<Claim> {
                    new Claim(type: JwtClaimTypes.GivenName, value: user.GivenName),
                    new Claim(type: JwtClaimTypes.FamilyName, value: user.FamilyName) };
                    await _userManager.AddClaimsAsync(newUser, claims);

                }

                else
                {
                    return new BadRequestObjectResult("User niet aangemaakt");
                }


                if (!result.Succeeded)
                {
                    return new JsonResult("User niet aangemaakt") { StatusCode = (int)HttpStatusCode.BadRequest };
                }

                return new JsonResult(result);
            }


            catch (ArgumentNullException e)
            {
                return new BadRequestObjectResult("User niet aangemaakt") { StatusCode = (int)HttpStatusCode.BadRequest };
            }
        }

        /// <summary>
        /// Deletes a user.
        /// </summary>
        /// <returns>IdentityResult</returns>
        // POST: api/identity/Delete
        [HttpPost("Delete")]
        public async Task<IActionResult> Delete([FromBody]string username)
        {
            var user = await _userManager.FindByNameAsync(username);

            var result = await _userManager.DeleteAsync(user);

            return new JsonResult(result);
        }

        private async Task addToRole(string userName, string roleName)
        {
            var user = await _userManager.FindByNameAsync(userName);
            await _userManager.AddToRoleAsync(user, roleName);
        }

        private async Task addClaims(string userName)
        {
            var user = await _userManager.FindByNameAsync(userName);
            var claims = new List<Claim> {
                new Claim(type: JwtClaimTypes.GivenName, value: user.GivenName),
                new Claim(type: JwtClaimTypes.FamilyName, value: user.FamilyName),
            };
            await _userManager.AddClaimsAsync(user, claims);
        }
    }
}