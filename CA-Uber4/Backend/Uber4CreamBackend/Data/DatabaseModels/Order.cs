using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Uber4Cream.Data.DatabaseModels
{
    public class Order
    {
        public int OrderID { get; set; }
        public Customer customer { get; set; }

        public DateTime orderdate { get; set; }

        public ICollection<ProductOrder> productorders { get; set; }



    }
}
