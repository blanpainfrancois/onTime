using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnTimeBackend.Models.AccountViewModels
{
    public class CreateEmployeeModel
    {
        public string username { get; set; }
        public string givenname { get; set; }
        public string familyname { get; set; }
        public string password { get; set; }
        public string email { get; set; }
        // public string passwordvalidate { get; set; }
    }
}
