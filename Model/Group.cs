using System;
using System.Collections.Generic;

namespace Model
{
    public class Group
    {
        public int GroupId { get; set; }
        public string Title { get; set; }
        public int SpecialityId { get; set; }
        public int TeacherId { get; set; }
        public string EducationLevel { get; set; }
        public string EducationForm { get; set; }
        public int StudentCount { get; set; }
        public bool IsActive { get; set; }

        public Speciality Speciality { get; set; }
        public Teacher Teacher { get; set; }
        public ICollection<Lesson> Lessons { get; set; }
    }
}
