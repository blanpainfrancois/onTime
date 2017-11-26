using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnTimeBackend.Models.AccountViewModels
{
    public class ReturnEmployers
    {
        public int EmployerID { get; set; }
        public string Name { get; set; }
        public string Username { get; set; }
        public DateTime CreatedAt { get; set; }
        public string IdentityID { get; set; }
    }
}
