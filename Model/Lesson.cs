using Newtonsoft.Json;

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

        [JsonIgnore]
        public Curriculum Curriculum { get; set; }
        [JsonIgnore]
        public Group Group { get; set; }
        [JsonIgnore]
        public Teacher Teacher { get; set; }
        [JsonIgnore]
        public Auditorium Auditorium { get; set; }
        [JsonIgnore]
        public Time Time { get; set; }
    }
}
