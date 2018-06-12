using System.Linq;
using DBRepository;
using Microsoft.AspNetCore.Mvc;
using Model;

namespace NubipSchedule.Controllers
{
    [Route("api/[controller]")]
    public class DepartamentController : Controller
    {
        private ApplicationContext db;

        public DepartamentController(ApplicationContext db)
        {
            this.db = db;
        }
        
        [HttpGet]
        public JsonResult GetDepartamentList()
        {
            var jsonLessons =
                db.Departaments
                    .Select(d => new
                    {
                        Id = d.DepartamentId,
                        Title = d.Title
                    })
                    .ToList();
            return new JsonResult(jsonLessons.AsEnumerable());
        }
        
        [HttpGet("{id}")]
        public JsonResult GetTeacherByDepartamentList(int id)
        {
            var jsonLessons =
                db.Teachers
                    .Where(t => t.DepartamentId == id)
                    .Select(t => new
                    {
                        Id = t.TeacherId,
                        Name = t.Name,
                        MiddleName = t.Middlename, 
                        LastName = t.LastName
                    })
                    .ToList();
            return new JsonResult(jsonLessons.AsEnumerable());
        }
    }
}