using OnTimeBackend.Data;
using OnTimeBackend.Models;
using OnTimeBackend.Services;
using IdentityServer4.AccessTokenValidation;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Swashbuckle.AspNetCore.Swagger;
using System;
using System.Linq;
using Microsoft.AspNetCore.Cors.Infrastructure;
using System.IO;
using Microsoft.Extensions.PlatformAbstractions;
using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Uber4Cream.Data.DatabaseModels;

namespace OnTimeBackend
{
    public class Startup
    {

        private string conString;

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            conString = Environment.GetEnvironmentVariable("CUSTOMCONNSTR_OnTimeAdminString");

            services.AddDbContext<ApplicationDbContext>(options =>

            options.UseSqlServer(conString)
            );

            services.AddIdentity<ApplicationUser, IdentityRole>()
                .AddEntityFrameworkStores<ApplicationDbContext>()
                .AddDefaultTokenProviders();

            services.AddCors();

            // Identity options.
            services.Configure<IdentityOptions>(options =>
            {
                // Password settings.
                options.Password.RequireDigit = true;
                options.Password.RequiredLength = 8;
                options.Password.RequireNonAlphanumeric = false;
                options.Password.RequireUppercase = true;
                options.Password.RequireLowercase = false;
                // Lockout settings.
                options.Lockout.AllowedForNewUsers = true;
                options.Lockout.MaxFailedAccessAttempts = 3;
                options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromDays(1);
            });

            // Role based Authorization: policy based role checks.
            services.AddAuthorization(options =>
            {
                // Policy for dashboard: only administrator role.
                options.AddPolicy("Manage Accounts", policy => policy.RequireRole("administrator"));
                // Policy for resources: user or administrator roles. 
                options.AddPolicy("Access Resources", policy => policy.RequireRole("administrator", "employer", "employee"));
            });

            

                // Adds application services.
                services.AddTransient<IEmailSender, EmailSender>();
                services.AddTransient<IDbInitializer, DbInitializer>();

            // Adds IdentityServer.
                services.AddIdentityServer()
               
                .AddDeveloperSigningCredential()
                .AddInMemoryPersistedGrants()
                // To configure IdentityServer to use EntityFramework (EF) as the storage mechanism for configuration data (rather than using the in-memory implementations),
                // see https://identityserver4.readthedocs.io/en/release/quickstarts/8_entity_framework.html
                .AddInMemoryIdentityResources(Config.GetIdentityResources())
                .AddInMemoryApiResources(Config.GetApiResources())
                .AddInMemoryClients(Config.GetClients())
                .AddAspNetIdentity<ApplicationUser>(); // IdentityServer4.AspNetIdentity.

            services.AddAuthentication(IdentityServerAuthenticationDefaults.AuthenticationScheme)
                .AddIdentityServerAuthentication(options =>
                {
                    options.Authority = "http://ontimeapi.azurewebsite.net/";
                    options.RequireHttpsMetadata = false;
                    options.ApiName = "WebAPI";
                });







            // Registers the Swagger generator, defining one or more Swagger documents.



            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new Info
                {
                    Version = "v1",
                    Title = "Uber 4 Cream API",
                    Description = "Cloud application projects",
                    TermsOfService = "None",
                    Contact = new Contact { Name = "Mo" }
                });
                c.AddSecurityDefinition("Bearer", new ApiKeyScheme() { In = "header", Description = "Please insert JWT with Bearer into field", Name = "Authorization", Type = "apiKey" });

            });

            services.AddMvc();
           

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug(LogLevel.Trace);


            app.UseCors(x => x
                            .AllowAnyOrigin()
                            .AllowAnyMethod()
                            .AllowAnyHeader()
                            .AllowCredentials());


            //Error logging
            app.UseStatusCodePages();

            app.UseIdentityServer();

            

            app.UseAuthentication();

            app.UseMvc();

            // Microsoft.AspNetCore.StaticFiles: API for starting the application from wwwroot.
            // Uses default files as index.html.
            app.UseDefaultFiles();
            // Uses static file for the current path.
            app.UseStaticFiles();

            // Enables middleware to serve generated Swagger as a JSON endpoint.
            app.UseSwagger();

            // Enables middleware to serve swagger-ui (HTML, JS, CSS etc.), specifying the Swagger JSON endpoint.
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "WebAPI v1");
            });
        }
    }
}
