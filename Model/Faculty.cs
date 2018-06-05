using System.Collections.Generic;
using Newtonsoft.Json;

namespace Model
{
    public class Faculty
    {
        public int FacultyId { get; set; }
        public string Title { get; set; }
        public string Dean { get; set; }
        public int BuildingId { get; set; }
        public string ShortName { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string Site { get; set; }

        [JsonIgnore]
        public Building Building { get; set; }
        [JsonIgnore]
        public ICollection<Speciality> Specialities { get; set; }
    }
}
