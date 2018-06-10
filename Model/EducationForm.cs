using System.Collections.Generic;
using Newtonsoft.Json;

namespace Model
{
    public class EducationForm
    {
        public int EducationFormId { get; set; }
        public string Title { get; set; }
        
        public ICollection<Group> Groups { get; set; }
    }
}