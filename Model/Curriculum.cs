using System;

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
    }
}
