using DBRepository.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace DBRepository.Factories
{
    public class ApplicationContextFactory : IApplicationContextFactory
    {
        public ApplicationContext CreateDbContext(string connectionString)
        {
            var optionsBuilder = new DbContextOptionsBuilder<ApplicationContext>();
            optionsBuilder.UseNpgsql(connectionString);

            return new ApplicationContext(optionsBuilder.Options);
        }
    }
}