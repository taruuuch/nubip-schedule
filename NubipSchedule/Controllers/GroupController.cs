using System;
using Model;
using DBRepository;
using System.Linq;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Internal;

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
        public JsonResult GetGroupInfo(int id)
        {
            var jsonLessons =
                db.Groups.Where(g => g.GroupId == id)
                    .Select(g => new
                    {
                        Id = g.GroupId,
                        Title = g.Title,
                        Speciality = g.Speciality.Title,
                        Teacher = g.Teacher.LastName,
                        Students = g.StudentCount,
                        EducationLevel = g.EducationLevel.Title,
                        EducationForm = g.EducationForm.Title
                    })
                    .ToList();
            return new JsonResult(jsonLessons.AsEnumerable());
        }
    }
}