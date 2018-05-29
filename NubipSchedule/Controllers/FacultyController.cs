using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace NubipSchedule.Controllers
{
    [Route("api/[controller]")]
    public class FacultyController : Controller
    {
        [HttpGet]
        public List<object> Get()
        {
            List<object> list = new List<object>();
            
            list.Add("Інформаційних технологій");
            list.Add("Аграрного менеджменту");
            list.Add("Агробіологічний");
            list.Add("Ветеринарної медицини");
            list.Add("Економічний");

            return list;
        }
    }
}