using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PersonController : ControllerBase
    {
        [HttpPost]
        public PersonModel SaveForm(PersonModel person)
        {
            string name = person.name;
            string second_name = person.second_name;
            string email = person.email;
            string phone_number = person.phone_number;

            return person;
        }
    }
}
