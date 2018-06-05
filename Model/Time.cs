using System;
using System.Collections.Generic;
using Newtonsoft.Json;

namespace Model
{
    public class Time
    {
        public int TimeId { get; set; }
        public int Number { get; set; }
        public TimeSpan Start { get; set; }
        public TimeSpan End { get; set; }

        [JsonIgnore]
        public ICollection<Lesson> Lessons { get; set; }
        [JsonIgnore]
        public ICollection<Request> Requests { get; set; }
    }
}
