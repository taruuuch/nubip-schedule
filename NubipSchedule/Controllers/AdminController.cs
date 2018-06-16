using Model;
using DBRepository;
using System.Linq;
using Microsoft.AspNetCore.Mvc;

namespace NubipSchedule.Controllers
{
    public class AdminController : Controller
    {
        private ApplicationContext db;

        public AdminController(ApplicationContext db)
        {
            this.db = db;
        }
        
        [HttpPost("api/lesson/add")]
        public IActionResult Post([FromBody]Lesson lesson)
        {
            return Ok(db.Lessons.Add(lesson));
        }
    }
}