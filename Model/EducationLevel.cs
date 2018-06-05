﻿using System.Collections.Generic;
using Newtonsoft.Json;

namespace Model
{
    public class EducationLevel
    {
        public int EducationLevelId { get; set; }
        public string Title { get; set; }

        [JsonIgnore]
        public ICollection<Group> Groups { get; set; }
    }
}