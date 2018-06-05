using Newtonsoft.Json;

namespace Model
{
    public class Teacher
    {
        public int TeacherId { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public string Middlename { get; set; }
        public bool IsActive { get; set; }
        public int DepartamentId { get; set; }
        public string Email { get; set; }
        public string Site { get; set; }
        public int DegreeId { get; set; }
        public int AcademicId { get; set; }

        [JsonIgnore]
        public Departament Departament { get; set; }
        [JsonIgnore]
        public Degree Degree { get; set; }
        [JsonIgnore]
        public Academic Academic { get; set; }
    }
}
