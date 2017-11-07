using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Uber4Cream.Data.DatabaseModels;
using Uber4CreamBackend.Models;

namespace Uber4CreamBackend.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<ProductCategory> productcategories { get; set; }
        public DbSet<Address> addresses { get; set; }

        public DbSet<Customer> customers { get; set; }
        public DbSet<Order> order { get; set; }
        public DbSet<Product> products { get; set; }
        public DbSet<ProductOrder> productorders { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<ProductOrder>()
              .HasKey(po => new { po.ProductID, po.OrderID });

            builder.Entity<ProductOrder>()
                .HasOne(bc => bc.order)
                .WithMany(b => b.productorders)
                .HasForeignKey(bc => bc.ProductID);

            builder.Entity<ProductOrder>()
                .HasOne(bc => bc.product)
                .WithMany(c => c.productorders)
                .HasForeignKey(bc => bc.OrderID);

        }
    }
}
