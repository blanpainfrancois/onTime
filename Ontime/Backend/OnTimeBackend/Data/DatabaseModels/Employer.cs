using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Uber4Cream.Data.DatabaseModels
{
    public class Employer
    {
        public int EmployerID { get; set; }
        public string Name { get; set; }
        public string Username { get; set; }
        public DateTime CreatedAt { get; set; }
        public ICollection<Employee> employees { get; set; }
        public string IdentityID { get; set; }
    }
}
