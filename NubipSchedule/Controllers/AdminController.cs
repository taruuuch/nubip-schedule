using System.Linq;
using DBRepository;
using Microsoft.AspNetCore.Mvc;

namespace NubipSchedule.Controllers
{
    [Route("api/[controller]")]
    public class AdminController : Controller
    {
        private ApplicationContext db;

        public AdminController(ApplicationContext db)
        {
            this.db = db;
        }
    }
    
    [Route("api/[controller]")]
    public class AuditoriumController : Controller
    {
        private ApplicationContext db;

        public AuditoriumController(ApplicationContext db)
        {
            this.db = db;
        }
        
        [HttpGet]
        public JsonResult GetAuditorium()
        {
            var json = 
                db.Auditoriums
                    .Select(s => new
                    {
                        Id = s.AuditoriumId,
                        Title = s.Number,
                        Building = s.Building.Number
                    })
                    .ToList();
            return new JsonResult(json.AsEnumerable());
        }
    }
}