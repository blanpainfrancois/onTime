using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Uber4Cream.Data.DatabaseModels
{
    public class Product
    {
        public int ProductID { get; set; }
        public string productname { get; set; }
        public ProductCategory productcategory { get; set; }

        public float price { get; set; }

        public DateTime creationdate { get; set; }

        public string details { get; set; }

        public ICollection<ProductOrder> productorders { get; set; }

        public override string ToString()
        {
            return "Product: productname = " + productname + " and price " + price.ToString();
        }

    }
}
