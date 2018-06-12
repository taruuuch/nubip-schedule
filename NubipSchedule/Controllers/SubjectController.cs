using System.Linq;
using DBRepository;
using Microsoft.AspNetCore.Mvc;

namespace NubipSchedule.Controllers
{
    [Route("api/[controller]")]
    public class SubjectController : Controller
    {
        private ApplicationContext db;

        public SubjectController(ApplicationContext db)
        {
            this.db = db;
        }
        
        [HttpGet]
        public JsonResult GetSubjectList()
        {
            var json = 
                db.Subjects
                    .Select(s => new
                    {
                        Id = s.SubjectId,
                        Title = s.Title,
                        Type = s.SubjectType.Title
                    })
                    .ToList();
            return new JsonResult(json.AsEnumerable());
        }
    }
}