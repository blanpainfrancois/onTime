using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Uber4Cream.Data.DatabaseModels
{
    public class Issue
    {
        public int IssueID { get; set; }
        public Reason reason { get; set; }
        public DateTime timestamp { get; set; }
        public DateTime IssueCreated { get; set; }
        public DateTime IssueClosed { get; set; }
        public Location location { get; set; }
        public Employee employee { get; set; }
    }
}
