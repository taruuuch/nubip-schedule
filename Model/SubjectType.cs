using System.Collections.Generic;

namespace Model
{
    public class SubjectType
    {
        public int SubjectTypeId { get; set; }
        public string Title { get; set; }
        
        public ICollection<Subject> Subjects { get; set; }
    }
}
