using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OnTimeBackend.Data;
using Uber4Cream.Data.DatabaseModels;

namespace OnTimeBackend.Controllers
{
    [Produces("application/json")]
    [Route("api/Reasons")]
    public class ReasonsController : Controller
    {
        private readonly ApplicationDbContext _context;

        public ReasonsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Reasons
        [HttpGet]
        public IEnumerable<Reason> Getreasons()
        {
            return _context.reasons;
        }

        // GET: api/Reasons/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetReason([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var reason = await _context.reasons.SingleOrDefaultAsync(m => m.ReasonID == id);

            if (reason == null)
            {
                return NotFound();
            }

            return Ok(reason);
        }

        // PUT: api/Reasons/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutReason([FromRoute] int id, [FromBody] Reason reason)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != reason.ReasonID)
            {
                return BadRequest();
            }

            _context.Entry(reason).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ReasonExists(id))
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

        // POST: api/Reasons
        [HttpPost]
        public async Task<IActionResult> PostReason([FromBody] Reason reason)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.reasons.Add(reason);
            await _context.SaveChangesAsync();

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

            var reason = await _context.reasons.SingleOrDefaultAsync(m => m.ReasonID == id);
            if (reason == null)
            {
                return NotFound();
            }

            _context.reasons.Remove(reason);
            await _context.SaveChangesAsync();

            return Ok(reason);
        }

        private bool ReasonExists(int id)
        {
            return _context.reasons.Any(e => e.ReasonID == id);
        }
    }
}