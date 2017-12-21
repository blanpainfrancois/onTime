﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using OnTimeBackend.Data;
using System;

namespace OnTimeBackend.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    partial class ApplicationDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.0-rtm-26452")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRole", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken();

                    b.Property<string>("Name")
                        .HasMaxLength(256);

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256);

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasName("RoleNameIndex")
                        .HasFilter("[NormalizedName] IS NOT NULL");

                    b.ToTable("AspNetRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ClaimType");

                    b.Property<string>("ClaimValue");

                    b.Property<string>("RoleId")
                        .IsRequired();

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetRoleClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ClaimType");

                    b.Property<string>("ClaimValue");

                    b.Property<string>("UserId")
                        .IsRequired();

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.Property<string>("LoginProvider");

                    b.Property<string>("ProviderKey");

                    b.Property<string>("ProviderDisplayName");

                    b.Property<string>("UserId")
                        .IsRequired();

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserLogins");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.Property<string>("UserId");

                    b.Property<string>("RoleId");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetUserRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.Property<string>("UserId");

                    b.Property<string>("LoginProvider");

                    b.Property<string>("Name");

                    b.Property<string>("Value");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("AspNetUserTokens");
                });

            modelBuilder.Entity("OnTimeBackend.Models.ApplicationUser", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AccessFailedCount");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken();

                    b.Property<string>("Email")
                        .HasMaxLength(256);

                    b.Property<bool>("EmailConfirmed");

                    b.Property<string>("FamilyName");

                    b.Property<string>("GivenName");

                    b.Property<bool>("LockoutEnabled");

                    b.Property<DateTimeOffset?>("LockoutEnd");

                    b.Property<string>("NormalizedEmail")
                        .HasMaxLength(256);

                    b.Property<string>("NormalizedUserName")
                        .HasMaxLength(256);

                    b.Property<string>("PasswordHash");

                    b.Property<string>("PhoneNumber");

                    b.Property<bool>("PhoneNumberConfirmed");

                    b.Property<string>("SecurityStamp");

                    b.Property<bool>("TwoFactorEnabled");

                    b.Property<string>("UserName")
                        .HasMaxLength(256);

                    b.HasKey("Id");

                    b.HasIndex("NormalizedEmail")
                        .HasName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasName("UserNameIndex")
                        .HasFilter("[NormalizedUserName] IS NOT NULL");

                    b.ToTable("AspNetUsers");
                });

            modelBuilder.Entity("Uber4Cream.Data.DatabaseModels.Address", b =>
                {
                    b.Property<int>("AddressID")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Country");

                    b.Property<int?>("EmployerID");

                    b.Property<string>("city");

                    b.Property<string>("housenumber");

                    b.Property<string>("streetname");

                    b.Property<string>("zipcode");

                    b.HasKey("AddressID");

                    b.HasIndex("EmployerID")
                        .IsUnique()
                        .HasFilter("[EmployerID] IS NOT NULL");

                    b.ToTable("addresses");
                });

            modelBuilder.Entity("Uber4Cream.Data.DatabaseModels.Employee", b =>
                {
                    b.Property<int>("EmployeeID")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("AddressID");

                    b.Property<int?>("EmployerID");

                    b.Property<string>("Familyname");

                    b.Property<string>("Givenname");

                    b.Property<string>("IdentityID");

                    b.Property<string>("Username");

                    b.HasKey("EmployeeID");

                    b.HasIndex("AddressID");

                    b.HasIndex("EmployerID");

                    b.ToTable("employees");
                });

            modelBuilder.Entity("Uber4Cream.Data.DatabaseModels.Employer", b =>
                {
                    b.Property<int>("EmployerID")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("CreatedAt");

                    b.Property<string>("IdentityID");

                    b.Property<string>("Name");

                    b.Property<string>("Username");

                    b.HasKey("EmployerID");

                    b.ToTable("employers");
                });

            modelBuilder.Entity("Uber4Cream.Data.DatabaseModels.Issue", b =>
                {
                    b.Property<int>("IssueID")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("EmployeeID");

                    b.Property<bool>("IssueClosed");

                    b.Property<DateTime>("IssueClosedDate");

                    b.Property<DateTime>("IssueCreated");

                    b.Property<int?>("LocationID");

                    b.Property<int?>("ReasonID");

                    b.Property<DateTime>("timestamp");

                    b.HasKey("IssueID");

                    b.HasIndex("EmployeeID");

                    b.HasIndex("LocationID")
                        .IsUnique()
                        .HasFilter("[LocationID] IS NOT NULL");

                    b.HasIndex("ReasonID")
                        .IsUnique()
                        .HasFilter("[ReasonID] IS NOT NULL");

                    b.ToTable("issues");
                });

            modelBuilder.Entity("Uber4Cream.Data.DatabaseModels.Location", b =>
                {
                    b.Property<int>("LocationID")
                        .ValueGeneratedOnAdd();

                    b.Property<double>("latitude");

                    b.Property<double>("longitude");

                    b.HasKey("LocationID");

                    b.ToTable("locations");
                });

            modelBuilder.Entity("Uber4Cream.Data.DatabaseModels.Reason", b =>
                {
                    b.Property<int>("ReasonID")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("reason");

                    b.Property<string>("reasontitle");

                    b.HasKey("ReasonID");

                    b.ToTable("reasons");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole")
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.HasOne("OnTimeBackend.Models.ApplicationUser")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.HasOne("OnTimeBackend.Models.ApplicationUser")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole")
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("OnTimeBackend.Models.ApplicationUser")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.HasOne("OnTimeBackend.Models.ApplicationUser")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Uber4Cream.Data.DatabaseModels.Address", b =>
                {
                    b.HasOne("Uber4Cream.Data.DatabaseModels.Employer", "employer")
                        .WithOne("address")
                        .HasForeignKey("Uber4Cream.Data.DatabaseModels.Address", "EmployerID");
                });

            modelBuilder.Entity("Uber4Cream.Data.DatabaseModels.Employee", b =>
                {
                    b.HasOne("Uber4Cream.Data.DatabaseModels.Address", "address")
                        .WithMany()
                        .HasForeignKey("AddressID");

                    b.HasOne("Uber4Cream.Data.DatabaseModels.Employer", "employer")
                        .WithMany("employees")
                        .HasForeignKey("EmployerID");
                });

            modelBuilder.Entity("Uber4Cream.Data.DatabaseModels.Issue", b =>
                {
                    b.HasOne("Uber4Cream.Data.DatabaseModels.Employee", "employee")
                        .WithMany("issues")
                        .HasForeignKey("EmployeeID");

                    b.HasOne("Uber4Cream.Data.DatabaseModels.Location", "location")
                        .WithOne("issue")
                        .HasForeignKey("Uber4Cream.Data.DatabaseModels.Issue", "LocationID");

                    b.HasOne("Uber4Cream.Data.DatabaseModels.Reason", "reason")
                        .WithOne("issue")
                        .HasForeignKey("Uber4Cream.Data.DatabaseModels.Issue", "ReasonID");
                });
#pragma warning restore 612, 618
        }
    }
}
