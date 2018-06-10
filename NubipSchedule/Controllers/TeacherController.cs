using System.Linq;
using DBRepository;
using Microsoft.AspNetCore.Mvc;
using Model;

namespace NubipSchedule.Controllers
{
    [Route("api/[controller]")]
    public class TeacherController : Controller
    {
        private ApplicationContext db;

        public TeacherController(ApplicationContext db)
        {
            this.db = db;
        }
        
        [HttpGet]
        public JsonResult GetTeacherList()
        {
            var jsonLessons =
                db.Teachers
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
        
        [HttpGet("{id}")]
        public JsonResult GetTeacherInfo(int id)
        {
            var jsonLessons =
                db.Teachers.Where(t => t.TeacherId == id)
                    .Select(t => new
                    {
                        Id = t.TeacherId,
                        Name = t.Name,
                        MiddleName = t.Middlename, 
                        LastName = t.LastName,
                        Degree = t.Degree.Title,
                        Academic = t.Academic.Title,
                        Departament = t.Departament.Title,
                        Email = t.Email,
                        Site = t.Site 
                    })
                    .ToList();
            return new JsonResult(jsonLessons.AsEnumerable());
        }
    }
}