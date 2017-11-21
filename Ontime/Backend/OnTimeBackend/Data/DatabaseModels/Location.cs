using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Uber4Cream.Data.DatabaseModels
{
    public class Location
    {
        public int LocationID { get; set; }
        public double latitude { get; set; }
        public double longtitude { get; set; }
        public Issue issue { get; set; }

    }
}
