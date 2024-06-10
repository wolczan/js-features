using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace MovieManagement.Api.Controllers
{


    [ApiController]
    [Route("[api/values]")]
    public class ValuesController : ControllerBase
    {
        // GET: api/products
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404notFound)]
        [ProducesResponseType(StatusCodes.Status403Forbiden)]
        public async Task<ActionResult<List<string>>> getAsync()

        {
            return new List<string>();
        }
        public IEnumerable<Product> Get()
        {
            // Pobierz wszystkie produkty
        }

        // GET: api/products/5
        [HttpGet("{id}")]
        public Product Get(int id)
        {
            // Pobierz produkt o danym ID
        }

        // POST: api/products
        [HttpPost]
        public void Post([FromBody] Product product)
        {
            // Dodaj nowy produkt
        }

        // ... inne metody dla PUT, DELETE itp.
    }
}