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
        public IEnumerable<Speciality> Get()
        {
            return db.Specialitys.ToList();
        }

        [HttpGet("{id}")]
        public IEnumerable<Group> GetGroup(int id)
        {
            return db.Groups.Where(x=>x.SpecialityId == id);
        }
    }
}