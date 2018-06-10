using System.Collections.Generic;
using Newtonsoft.Json;

namespace Model
{
    public class Degree
    {
        public int DegreeId { get; set; }
        public string Title { get; set; }
        
        public ICollection<Teacher> Teachers { get; set; }
    }
}
