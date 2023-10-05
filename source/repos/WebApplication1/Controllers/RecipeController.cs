using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RecipeController : ControllerBase
    {
        public List<Recipe> Recipes = new List<Recipe>();
        [HttpGet]
        public IEnumerable<Recipe> Get()
        {
            string myJSON = System.IO.File.ReadAllText("json1.json");
            IEnumerable<Recipe> recipes = Newtonsoft.Json.JsonConvert.DeserializeObject<IEnumerable<Recipe>>(myJSON);
            Recipes.AddRange(recipes);
            return Recipes;
        }

        [HttpGet]
        [Route("{id}")]
        public Recipe Get(int id)
        {
            string myJSON = System.IO.File.ReadAllText("json1.json");
            IEnumerable<Recipe> recipes = Newtonsoft.Json.JsonConvert.DeserializeObject<IEnumerable<Recipe>>(myJSON);
            return recipes.FirstOrDefault(r => r.Id == id);
        }
      
    }
}
