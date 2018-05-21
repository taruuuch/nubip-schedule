using System;
using System.Collections.Generic;

namespace Model
{
    public class Degree
    {
        public int DegreeId { get; set; }
        public string Title { get; set; }

        public ICollection<Teacher> Teachers { get; set; }
    }
}
