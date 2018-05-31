using Microsoft.AspNetCore.Mvc;

namespace NubipSchedule.Controllers
{
    [Route("api/[controller]")]
    public class LoginController : Controller
    {
        [HttpGet]
        public string GetLogin()
        {
            return "login user";
        }
    }
}