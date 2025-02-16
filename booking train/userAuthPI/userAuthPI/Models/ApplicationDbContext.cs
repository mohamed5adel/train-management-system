
using Microsoft.EntityFrameworkCore;
using userAuthPl.Models;

namespace userAuthPI.Models
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<User> Users { get; set; } 
    }
}
