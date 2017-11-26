using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using OnTimeBackend.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using OnTimeBackend.Data;
using Uber4Cream.Data.DatabaseModels;
using Microsoft.AspNetCore.Authorization;

namespace OnTimeBackend.Controllers
{
    [Route("api/[controller]")]
    public class UtilController : Controller
    {
        private readonly UserManager<ApplicationUser> usermanager;
        private readonly RoleManager<IdentityRole> rolemanager;
        private readonly ApplicationDbContext context;

        private readonly static int USER_GENERATE = 20;


        public UtilController(
             UserManager<ApplicationUser> usermanager,
            RoleManager<IdentityRole> rolemanager,
             ApplicationDbContext context)
        {
            this.usermanager = usermanager;
            this.rolemanager = rolemanager;
            this.context = context;

        }

        [AllowAnonymous]
        [HttpGet("CreateUsers")]
        public async Task<IActionResult> createUsers(string role)
        {

            if(role == "employer")
            {
                await CreateUsers(USER_GENERATE , role);
                return Ok();
            }
            if(role == "employee")
            {
                await CreateUsers(USER_GENERATE, role);
                return Ok();

            }
            else
            {
                return BadRequest("no valid role");
            }

            return BadRequest();
        }

        [AllowAnonymous]
        [HttpGet("AllUsersFromRole")]
        public async Task<IActionResult> AllUsersFromRole(string role)
        {


            if (role == "employer")
            {
               var employers = await context.employers.ToListAsync();

                return new JsonResult(employers);

            }
            if (role == "employee")
            {
                var employees = await context.employees.ToListAsync();

                return new JsonResult(employees);

            }
            
             return BadRequest("no valid role");
            

        }



            private async Task CreateUsers(int count, string role)
        {


            Random r = new Random();
            List<ApplicationUser> users = new List<ApplicationUser>();

            for (int i = 0; i < count; i++)
            {
                var user = new ApplicationUser
                {
                    UserName = GenerateName(r.Next(4, 10), r),
                    FamilyName = GenerateName(r.Next(4, 8), r),
                    GivenName = GenerateName(r.Next(4, 8), r)
                };
                users.Add(user);
            }


            foreach (var user in users)
            {
                var result = await usermanager.CreateAsync(user, "Admin01**");

                var roleresult = await usermanager.AddToRoleAsync(user, role);

                if (roleresult.Succeeded && role == "employer")
                {
                    context.employers.Add(new Employer
                    {
                        IdentityID = user.Id,
                        Name = user.UserName,
                        CreatedAt = DateTime.Now
                          
                    });
                }

                else if (roleresult.Succeeded && role == "employee")
                {

                    context.employees.Add(new Employee
                    {
                        IdentityID = user.Id,
                        Givenname = user.GivenName,
                        Familyname = user.FamilyName
                    });

                }
                context.SaveChanges();
                
            }
        }

        private static string GenerateName(int len, Random r)
        {

            string[] consonants = { "b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "l", "n", "p", "q", "r", "s", "sh", "zh", "t", "v", "w", "x" };
            string[] vowels = { "a", "e", "i", "o", "u", "ae", "y" };
            string Name = "";
            Name += consonants[r.Next(consonants.Length)].ToUpper();
            Name += vowels[r.Next(vowels.Length)];
            int b = 2;
            while (b < len)
            {
                Name += consonants[r.Next(consonants.Length)];
                b++;
                Name += vowels[r.Next(vowels.Length)];
                b++;
            }

            return Name;
        }
    }
}