using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Uber4Cream.Data.DatabaseModels
{
    public class Address
    {
        public int AddressID { get; set; }
        public string streetname { get; set; }
        public string housenumber { get; set; }
        public string city { get; set; }
        public string zipcode { get; set; }
        public string Country { get; set; }

        public Employer employer { get; set; }

       public string GetAddress()
        {

            return streetname + "+" + housenumber + "+" + city + "+" + zipcode + "+" + Country;
        }  

    }
}
