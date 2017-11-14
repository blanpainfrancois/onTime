using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Uber4Cream.Data.DatabaseModels;
using Uber4CreamBackend.Data;

namespace Uber4Cream.Data
{
    public class Databasefiller
    {

        private readonly ApplicationDbContext context;
        private readonly RoleManager<IdentityRole> _roleManager;

        public Databasefiller(ApplicationDbContext context, RoleManager<IdentityRole> roleManager)
        {

            this.context = context;
            _roleManager = roleManager;

            
        }


    }
}
