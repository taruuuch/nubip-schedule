using System;

namespace Model
{
    public class Lesson
    {
        public int LessonId { get; set; }
        public int CurriculumId { get; set; }
        public int GroupId { get; set; }
        public int TeacherId { get; set; }
        public int AuditoriumId { get; set; }
        public int TimeId { get; set; }
        public string Day { get; set; }
        public int Week { get; set; }
        public int SubGroup { get; set; }
    }
}
