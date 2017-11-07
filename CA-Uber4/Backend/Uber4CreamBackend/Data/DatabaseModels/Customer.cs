using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Uber4Cream.Data.DatabaseModels
{
    public class Customer
    {
        public int CustomerID { get; set; }
        public string givenname { get; set; }
        public string familyname { get; set; }
        public string phone { get; set; }
        public string email { get; set; }
        public string customerdetails { get; set; }
        public string username { get; set; }

        public DateTime birthdate { get; set; }

        public DateTime createdate { get; set; }

        public Address address { get; set; }

        public ICollection<Order> orders { get; set; }

        public string IdentityUserID  { get; set; }



    }
}
