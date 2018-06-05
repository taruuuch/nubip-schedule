using System;
using Newtonsoft.Json;

namespace Model
{
    public class Request
    {
        public int RequestId { get; set; }
        public int LessonId { get; set; }
        public int TimeId { get; set; }
        public DateTime From { get; set; }
        public DateTime To { get; set; }
        public DateTime RequestTime { get; set; }
        public bool Status { get; set; }

        [JsonIgnore]
        public Lesson Lesson { get; set; }
        [JsonIgnore]
        public Time Time { get; set; }
    }
}

