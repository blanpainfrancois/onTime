using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OnTimeBackend.Data;
using Uber4Cream.Data.DatabaseModels;
using Microsoft.AspNetCore.Authorization;
using IdentityServer4.AccessTokenValidation;
using Microsoft.EntityFrameworkCore;

namespace OnTimeBackend.Controllers
{
    [Produces("application/json")]
    [Route("api/Employers")]
    [Authorize(AuthenticationSchemes = IdentityServerAuthenticationDefaults.AuthenticationScheme, Policy = "Access Resources")]
    public class EmployersController : Controller
    {
        private readonly ApplicationDbContext context;

        public EmployersController(ApplicationDbContext context)
        {
            this.context = context;
        }

        // GET: api/Employers
        [HttpGet]
        public async Task<IActionResult> Getemployers()
        {

            var employers = await context.employers.ToListAsync();

            return new JsonResult(employers);
        }

        // GET: api/Employers/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetEmployer([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var employer = await context.employers.SingleOrDefaultAsync(m => m.EmployerID == id);

            if (employer == null)
            {
                return NotFound();
            }

            return Ok(employer);
        }

        // PUT: api/Employers/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEmployer([FromRoute] int id, [FromBody] Employer employer)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != employer.EmployerID)
            {
                return BadRequest();
            }

            context.Entry(employer).State = EntityState.Modified;

            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployerExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Employers
        [HttpPost]
        public async Task<IActionResult> PostEmployer([FromBody] Employer employer)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            context.employers.Add(employer);
            await context.SaveChangesAsync();

            return CreatedAtAction("GetEmployer", new { id = employer.EmployerID }, employer);
        }

        // DELETE: api/Employers/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmployer([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var employer = await context.employers.SingleOrDefaultAsync(m => m.EmployerID == id);
            if (employer == null)
            {
                return NotFound();
            }

            context.employers.Remove(employer);
            await context.SaveChangesAsync();

            return Ok(employer);
        }

        private bool EmployerExists(int id)
        {
            return context.employers.Any(e => e.EmployerID == id);
        }
    }
}