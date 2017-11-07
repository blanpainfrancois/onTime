using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Uber4Cream.Data.DatabaseModels;
using Uber4CreamBackend.Data;

namespace Uber4Cream.Controllers
{
    [Produces("application/json")]
    [Route("api/ProductCategories")]
    public class ProductCategoriesController : Controller
    {
        private readonly ApplicationDbContext _context;

        public ProductCategoriesController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/ProductCategories
        [HttpGet]
        public IEnumerable<ProductCategory> Getproductcategories()
        {
            return _context.productcategories;
        }

        // GET: api/ProductCategories/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetProductCategory([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var productCategory = await _context.productcategories.SingleOrDefaultAsync(m => m.ProductCategoryID == id);

            if (productCategory == null)
            {
                return NotFound();
            }

            return Ok(productCategory);
        }

        // PUT: api/ProductCategories/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProductCategory([FromRoute] int id, [FromBody] ProductCategory productCategory)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != productCategory.ProductCategoryID)
            {
                return BadRequest();
            }

            _context.Entry(productCategory).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductCategoryExists(id))
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

        // POST: api/ProductCategories
        [HttpPost]
        public async Task<IActionResult> PostProductCategory([FromBody] ProductCategory productCategory)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.productcategories.Add(productCategory);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProductCategory", new { id = productCategory.ProductCategoryID }, productCategory);
        }

        // DELETE: api/ProductCategories/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProductCategory([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var productCategory = await _context.productcategories.SingleOrDefaultAsync(m => m.ProductCategoryID == id);
            if (productCategory == null)
            {
                return NotFound();
            }

            _context.productcategories.Remove(productCategory);
            await _context.SaveChangesAsync();

            return Ok(productCategory);
        }

        private bool ProductCategoryExists(int id)
        {
            return _context.productcategories.Any(e => e.ProductCategoryID == id);
        }
    }
}