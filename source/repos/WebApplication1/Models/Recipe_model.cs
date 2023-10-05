using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace WebApplication1.Models
{
    public class Recipe
    {
        public string Name { get; set; }
        public string Category { get; set; }
        public string[] Ingredients { get; set; }
        public string Src { get; set; }
        public int Id { get; set; }
    }
}
