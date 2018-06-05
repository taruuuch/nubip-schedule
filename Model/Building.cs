using System.Collections.Generic;
using Newtonsoft.Json;

namespace Model
{
    public class Building
    {
        public int BuildingId { get; set; }
        public string Title { get; set; }
        public string Latitude { get; set; }
        public string Longitude { get; set; }

        [JsonIgnore]
        public ICollection<Auditorium> Auditoriums { get; set; }
        [JsonIgnore]
        public ICollection<Faculty> Faculties { get; set; }
    }
}
