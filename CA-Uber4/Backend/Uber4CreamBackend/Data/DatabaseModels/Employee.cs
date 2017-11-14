using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Uber4Cream.Data.DatabaseModels
{
    public class Employee
    {
        public int EmployeeID { get; set; }
        public string Givenname { get; set; }
        public string Familyname { get; set; }
        public Address address { get; set; }
        public ICollection<Issue> issues { get; set; }
        public Employer employer { get; set; }
        public string IdentityID { get; set; }

    }
}
