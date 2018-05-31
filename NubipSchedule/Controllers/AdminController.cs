using Microsoft.AspNetCore.Mvc;

namespace NubipSchedule.Controllers
{
    [Route("api/[controller]")]
    public class AdminController : Controller
    {
        [HttpGet]
        public string Get()
        {
            return "Give me permissions!";
        }
        
        [HttpPost]
        public string Post()
        {
            return "Give me permissions!";
        }
        
        [HttpDelete]
        public string DeleteLesson()
        {
            return "Give me permissions!";
        }
    }
}