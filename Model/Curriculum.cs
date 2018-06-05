using System.Collections.Generic;
using Newtonsoft.Json;

namespace Model
{
    public class Curriculum
    {
        public int CurriculumId { get; set; }
        public int DepartamentId { get; set; }
        public int SubjectId { get; set; }
        public int LectionCount { get; set; }
        public int LabaratorCount { get; set; }
        public int Semester { get; set; }

        [JsonIgnore]
        public Speciality Speciality { get; set; }
        [JsonIgnore]
        public Departament Departament { get; set; }
        [JsonIgnore]
        public Subject Subject { get; set; }
        [JsonIgnore]
        public ICollection<Lesson> Lessons { get; set; }
    }
}
