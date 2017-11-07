using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Uber4Cream.Data.DatabaseModels
{
    public class ProductCategory
    {
        public int ProductCategoryID { get; set; }
        public string name { get; set; }

        public ICollection<Product> products { get; set; }
    }
}
