using System.Collections.Generic;
using Newtonsoft.Json;

namespace Model
{
    public class Group
    {
        public int GroupId { get; set; }
        public string Title { get; set; }
        public int SpecialityId { get; set; }
        public int TeacherId { get; set; }
        public int EducationLevelId { get; set; }
        public int EducationFormId { get; set; }
        public int StudentCount { get; set; }
        public bool IsActive { get; set; }

        [JsonIgnore]
        public Speciality Speciality { get; set; }
        [JsonIgnore]
        public Teacher Teacher { get; set; }
        [JsonIgnore]
        public EducationLevel EducationLevel { get; set; }
        [JsonIgnore]
        public EducationForm EducationForm { get; set; }
        
        [JsonIgnore]
        public ICollection<Lesson> Lessons { get; set; }
    }
}
