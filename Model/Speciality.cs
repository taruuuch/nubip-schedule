using System.Collections.Generic;
using Newtonsoft.Json;

namespace Model
{
    public class Speciality
    {
        public int SpecialityId { get; set; }
        public string Title { get; set; }
        public int FacultyId { get; set; }

        [JsonIgnore]
        public Faculty Faculty { get; set; }
        [JsonIgnore]
        public ICollection<Group> Groups { get; set; }
        [JsonIgnore]
        public ICollection<Curriculum> Curriculums { get; set; }
    }
}
