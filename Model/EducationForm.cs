using System.Collections.Generic;

namespace Model
{
    public class EducationForm
    {
        public int EducationFormId { get; set; }
        public string Title { get; set; }
        
        public ICollection<Group> Groups { get; set; }
    }
}