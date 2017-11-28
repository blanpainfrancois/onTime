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
    [Route("api/Issues")]
    public class IssuesController : Controller
    {
        private readonly ApplicationDbContext context;

        public IssuesController(ApplicationDbContext context)
        {
            this.context = context;
        }

        // GET: api/Issues
        [HttpGet]
        public IEnumerable<Issue> Getissues()
        {
            return context.issues;
        }

        // GET: api/Issues/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetIssue([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var issue = await context.issues.SingleOrDefaultAsync(m => m.IssueID == id);

            if (issue == null)
            {
                return NotFound();
            }

            return Ok(issue);
        }

        // PUT: api/Issues/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutIssue([FromRoute] int id, [FromBody] Issue issue)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != issue.IssueID)
            {
                return BadRequest();
            }

            context.Entry(issue).State = EntityState.Modified;

            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!IssueExists(id))
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

        // POST: api/Issues
        [HttpPost]
        public async Task<IActionResult> PostIssue([FromBody] Issue issue)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            context.issues.Add(issue);
            await context.SaveChangesAsync();

            return CreatedAtAction("GetIssue", new { id = issue.IssueID }, issue);
        }

        // DELETE: api/Issues/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteIssue([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var issue = await context.issues.SingleOrDefaultAsync(m => m.IssueID == id);
            if (issue == null)
            {
                return NotFound();
            }

            context.issues.Remove(issue);
            await context.SaveChangesAsync();

            return Ok(issue);
        }

        private bool IssueExists(int id)
        {
            return context.issues.Any(e => e.IssueID == id);
        }
    }
}