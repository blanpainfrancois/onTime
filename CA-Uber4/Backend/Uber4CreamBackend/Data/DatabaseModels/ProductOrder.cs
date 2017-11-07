using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Uber4Cream.Data.DatabaseModels
{
    public class ProductOrder
    {
        public int OrderID { get; set; }
        public int ProductID { get; set; }
        public Product product { get; set; }
        public Order order { get; set; }
    }
}
