using Uber4CreamBackend.Data;
using System.Threading.Tasks;

namespace Uber4CreamBackend.Services
{
    public interface IDbInitializer
    {
        Task Initialize(ApplicationDbContext context);
    }
}
