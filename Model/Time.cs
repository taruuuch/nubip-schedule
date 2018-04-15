using System;

namespace Model
{
    public class Time
    {
        public int TimeId { get; set; }
        public int Number { get; set; }
        public TimeSpan Start { get; set; }
        public TimeSpan End { get; set; }
    }
}
