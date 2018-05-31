using Microsoft.AspNetCore.Mvc;

namespace NubipSchedule.Controllers
{
    [Route("api/[controller]")]
    public class TeacherController : Controller
    {
        [HttpGet]
        public string GetAll()
        {
            return "teacher";
        }
        
        [HttpGet("{id}")]
        public string GetLesson(int id)
        {
            return "teacher #" + id;
        }
    }
}