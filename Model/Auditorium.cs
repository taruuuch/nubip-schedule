using System;

namespace Model
{
    public class Auditorium
    {
        public int AuditoriumId { get; set; }
        public int Number { get; set; }
        public int BuildingId { get; set; }
        public int SeatseCount { get; set; }
        public int AuditoriumTypeId { get; set; }
    }
}
