using System;
using Model;
using DBRepository;
using System.Linq;
using Microsoft.AspNetCore.Mvc;

namespace NubipSchedule.Controllers
{
    [Route("api/[controller]")]
    public class LessonController : Controller
    {
        private ApplicationContext db;

        public LessonController(ApplicationContext db)
        {
            this.db = db;
        }
        
        [HttpGet("{id}")]
        public JsonResult GetLessonForGroup(int id)
        {
            var jsonLessons =
                db.Lessons.Where(l => l.GroupId == id)
                    .Select(l => new
                    {
                        WeekDay = l.Day,
                        WeekNumber = l.Week,
                        SubGroupNumber = l.SubGroup,
                        SubjectTitle = l.Curriculum.Subject.Title,
                        SubjectType = l.Curriculum.Subject.SubjectType.Title,
                        Auditorium = l.Auditorium.Number,
                        Building = l.Auditorium.Building.Number,
                        BuildingLat = l.Auditorium.Building.Latitude,
                        BuildingLong = l.Auditorium.Building.Longitude,
                        Group = l.Group.Title,
                        TeacherName = l.Teacher.Name,
                        TeacherMiddlename = l.Teacher.Middlename,
                        TeacherLastname = l.Teacher.LastName,
                        TeacherAcademic = l.Teacher.Academic.Title,
                        SubjectNumber = l.Time.Number,
                        TimeStart = l.Time.Start,
                        TimeEnd = l.Time.End
                    })
                    .ToList();
            return new JsonResult(jsonLessons.AsEnumerable());
        }
    }
}