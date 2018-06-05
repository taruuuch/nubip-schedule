﻿using System.Collections.Generic;
using Newtonsoft.Json;

namespace Model
{
    public class SubjectType
    {
        public int SubjectTypeId { get; set; }
        public string Title { get; set; }

        [JsonIgnore]
        public ICollection<Subject> Subjects { get; set; }
    }
}
