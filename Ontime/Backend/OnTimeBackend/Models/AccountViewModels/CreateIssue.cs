using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Uber4Cream.Data.DatabaseModels;

namespace OnTimeBackend.Models.AccountViewModels
{
    public class CreateIssue
    {
        public bool issueClosed { get; set; }
        public Reason reason { get; set; }
        public Location location { get; set; }

    }
}
