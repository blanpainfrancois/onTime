using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IdentityServer4.AccessTokenValidation;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OnTimeBackend.Data;
using Uber4Cream.Data.DatabaseModels;

namespace OnTimeBackend.Controllers
{
    [Authorize(AuthenticationSchemes = IdentityServerAuthenticationDefaults.AuthenticationScheme, Policy = "Access Resources")]
    [Produces("application/json")]
    [Route("api/Reasons")]
    public class ReasonsController : Controller
    {
        private readonly ApplicationDbContext context;

        public ReasonsController(ApplicationDbContext context)
        {
            this.context = context;
        }

        // GET: api/Reasons
        [HttpGet]
        public async Task<IActionResult>  GetReasons()
        {

            var reasons = await context.reasons.ToListAsync();

            return Ok(reasons);
        }

       
        [HttpPost]
        public async Task<IActionResult> PostReason([FromBody] Reason reason)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            context.reasons.Add(reason);
            await context.SaveChangesAsync();

            return CreatedAtAction("GetReason", new { id = reason.ReasonID }, reason);
        }

        // DELETE: api/Reasons/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteReason([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var reason = await context.reasons.SingleOrDefaultAsync(m => m.ReasonID == id);
            if (reason == null)
            {
                return NotFound();
            }

            context.reasons.Remove(reason);
            await context.SaveChangesAsync();

            return Ok(reason);
        }

        
    }
}