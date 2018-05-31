namespace DBRepository.Interfaces
{
    public interface IApplicationContextFactory
    {
        ApplicationContext CreateDbContext(string connectionString);
    }
}