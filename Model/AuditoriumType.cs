﻿using System.Collections.Generic;

namespace Model
{
    public class AuditoriumType
    {
        public int AuditoriumTypeId { get; set; }
        public string Title { get; set; }
        public bool Computer { get; set; }
        
        public ICollection<Auditorium> Auditoriums { get; set; }
    }
}
