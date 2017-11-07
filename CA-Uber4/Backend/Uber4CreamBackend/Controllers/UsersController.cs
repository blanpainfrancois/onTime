using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using IdentityModel;
using IdentityServer4.AccessTokenValidation;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using Uber4CreamBackend.Models;
using Uber4Cream.Models;
using Uber4Cream.Data.DatabaseModels;

namespace Uber4CreamBackend.Controllers
{

    [Route("api/[controller]")]
    [Authorize(AuthenticationSchemes = IdentityServerAuthenticationDefaults.AuthenticationScheme, Policy = "Access Resources")]
    public class UsersController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly ILogger _logger;




        public UsersController(UserManager<ApplicationUser> userManager,
            RoleManager<IdentityRole> roleManager , ILogger<UsersController> logger )
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _logger = logger;

        }



        [HttpGet("getuser")]
        public async Task<IActionResult> GetUser()
        {
            var user = await _userManager.GetUserAsync(User);

            var roleresult = await _userManager.GetRolesAsync(user);

            var modelUser = new ModelUser {
                userName = user.UserName,
                email = user.Email,
                familyName = user.FamilyName,
                givenName = user.GivenName,
                role = roleresult  
            };

            return new JsonResult(modelUser);
        }



        [HttpDelete("deleteuser")]
        public async Task<IActionResult> DeleteUser()
        {
            var user = await _userManager.GetUserAsync(User);
            var result = await _userManager.DeleteAsync(user);
            return new JsonResult(result);
        }


    }
}