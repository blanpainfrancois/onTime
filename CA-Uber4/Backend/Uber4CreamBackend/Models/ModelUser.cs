using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Uber4Cream.Models
{
    public class ModelUser
    {
        public string givenName { get; set; }

        public string familyName { get; set; }

        public string userName { get; set; }

        public string email { get; set; }

        public IList<string> role { get; set; }

    }
}
