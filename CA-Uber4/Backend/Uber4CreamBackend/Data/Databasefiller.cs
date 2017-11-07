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

            if(!context.productcategories.Any(pc => pc.name == "waterijs"))
            {
             var productcategory = new ProductCategory
            {
                name = "waterijs"
            };

                context.productcategories.Add(productcategory);
                context.SaveChanges();

            }



            //Ward hier moet je nieuwe producten aanmaken en toevoegen aan products
            //same voor productcategoriën. Veel 
            var product = new Product
            {
                productname = "rocket",
                price = 1.80F,
                productcategory = context.productcategories.Where(p => p.name == "waterijs").FirstOrDefault(),
                creationdate = DateTime.Now

            };


            context.products.Add(product);
            context.SaveChanges();


           
            
            

            _roleManager.CreateAsync(new IdentityRole("IceMaker"));

            

        }


    }
}
