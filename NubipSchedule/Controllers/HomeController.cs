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
    public class SpecialityController : Controller
    {
        private ApplicationContext db;

        public SpecialityController(ApplicationContext db)
        {
            this.db = db;
        }

        [HttpGet]
        public JsonResult GetSpecialityList()
        {
            var jsonLessons = 
                db.Specialitys
                    .Select(s => new
                    {
                        Id = s.SpecialityId,
                        Title = s.Title
                    })
                    .ToList();
            return new JsonResult(jsonLessons.AsEnumerable());
        }

        [HttpGet("{id}")]
        public JsonResult GetGroupList(int id)
        {
            var jsonLessons = 
                db.Groups.Where(g => g.SpecialityId == id)
                    .Select(g => new
                    {
                        Id = g.GroupId,
                        Title = g.Title
                    })
                .ToList();
            return new JsonResult(jsonLessons.AsEnumerable());
        }
    }
}