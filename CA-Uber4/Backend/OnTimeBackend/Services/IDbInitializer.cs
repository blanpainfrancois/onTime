using OnTimeBackend.Data;
using System.Threading.Tasks;

namespace OnTimeBackend.Services
{
    public interface IDbInitializer
    {
        Task Initialize(ApplicationDbContext context);
    }
}
