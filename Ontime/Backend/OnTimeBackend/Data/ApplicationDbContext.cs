using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Uber4Cream.Data.DatabaseModels;
using OnTimeBackend.Models;

namespace OnTimeBackend.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Address> addresses { get; set; }
        public DbSet<Employee> employees { get; set; }
        public DbSet<Employer> employers { get; set; }
        public DbSet<Issue> issues { get; set; }
        public DbSet<Location> locations { get; set; }
        public DbSet<Reason> reasons { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }
    }
}
