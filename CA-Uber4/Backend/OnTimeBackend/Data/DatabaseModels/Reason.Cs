using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Uber4Cream.Data.DatabaseModels
{
    public class Reason
    {
        public int ReasonID { get; set; }
        public string reason { get; set; }
        public Issue issue { get; set; }
    }
}
