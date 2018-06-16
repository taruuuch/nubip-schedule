using System.Collections.Generic;

namespace Model
{
    public class EducationLevel
    {
        public int EducationLevelId { get; set; }
        public string Title { get; set; }
        
        public ICollection<Group> Groups { get; set; }
    }
}