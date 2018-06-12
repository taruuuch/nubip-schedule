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
        
        [HttpGet]
        public JsonResult GetGroupList()
        {
            var json = 
                db.Groups
                    .Select(s => new
                    {
                        Id = s.GroupId,
                        Title = s.Title
                    })
                    .ToList();
            return new JsonResult(json.AsEnumerable());
        }
        
        [HttpGet("{id}")]
        public JsonResult GetGroupInfo(int id)
        {
            var json =
                db.Groups.Where(g => g.GroupId == id)
                    .Select(g => new
                    {
                        Id = g.GroupId,
                        Title = g.Title,
                        Faculty = g.Speciality.Faculty.Title, 
                        Speciality = g.Speciality.Title,
                        Teacher = g.Teacher.LastName,
                        Students = g.StudentCount,
                        EducationLevel = g.EducationLevel.Title,
                        EducationForm = g.EducationForm.Title
                    })
                    .ToList();
            return new JsonResult(json.AsEnumerable());
        }
    }
}