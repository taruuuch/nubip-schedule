using System;
using Model;
using DBRepository;
using System.Linq;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;

namespace NubipSchedule.Controllers
{
    [Route("api/[controller]")]
    public class GroupController : Controller
    {
        private ApplicationContext db;

        public GroupController(ApplicationContext db)
        {
            this.db = db;
        }
        
        [HttpGet("{id}")]
        public IEnumerable<Lesson> GetLesson(int id)
        {
            return db.Lessons.Where(x=>x.GroupId == id);
        }
    }
}