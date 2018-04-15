using Microsoft.EntityFrameworkCore;

namespace DBRepository
{
    public static class DbInitializer
    {
        public static void Initialize(ApplicationContext context)
        {
            context.Database.Migrate();
        }
    }
}
