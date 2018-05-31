using DBRepository.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace DBRepository.Repositories
{
    public abstract class BaseRepository
    {
        protected string ConnectionString { get; }
        protected IApplicationContextFactory ContextFactory { get; }
        
        public BaseRepository(string connectionString, IApplicationContextFactory contextFactory)
        {
            ConnectionString = connectionString;
            ContextFactory = contextFactory;
        }
    }
}