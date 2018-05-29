using Microsoft.AspNetCore.Mvc;

namespace NubipSchedule.Controllers
{
    [Route("api/[controller]")]
    public class GroupController : Controller
    {
        [HttpGet]
        public string GetAll()
        {
            return "group";
        }
        
        [HttpGet("{id}")]
        public string GetLesson(int id)
        {
            return "group #" + id;
        }
    }
}