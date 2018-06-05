using System.Collections.Generic;
using Newtonsoft.Json;

namespace Model
{
    public class Departament
    {
        public int DepartamentId { get; set; }
        public string Title { get; set; }
        public string Dean { get; set; }
        public int FacultyId { get; set; }
        public string Email { get; set; }

        [JsonIgnore]
        public ICollection<Teacher> Teachers { get; set; }
        [JsonIgnore]
        public ICollection<Curriculum> Curriculums { get; set; }
    }
}
