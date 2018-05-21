using System;
using System.Collections.Generic;

namespace Model
{
    public class Building
    {
        public int BuildingId { get; set; }
        public string Title { get; set; }
        public string Latitude { get; set; }
        public string Longitude { get; set; }

        public ICollection<Auditorium> Auditoriums { get; set; }
        public ICollection<Faculty> Faculties { get; set; }
    }
}
