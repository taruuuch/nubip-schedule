using System.Collections.Generic;
using Newtonsoft.Json;

namespace Model
{
    public class AuditoriumType
    {
        public int AuditoriumTypeId { get; set; }
        public string Title { get; set; }
        public bool Computer { get; set; }

        [JsonIgnore]
        public ICollection<Auditorium> Auditoriums { get; set; }
    }
}
