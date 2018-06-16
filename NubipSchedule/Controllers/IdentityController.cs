using DBRepository;
using Microsoft.AspNetCore.Mvc;

namespace NubipSchedule.Controllers
{
    public class IdentityController : Controller
    {
        private ApplicationContext db;

        public IdentityController(ApplicationContext db)
        {
            this.db = db;
        }

        [HttpPost]
        public IActionResult Identification()
        {
            return null;
        }
    }
}