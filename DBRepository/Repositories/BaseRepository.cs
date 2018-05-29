using DBRepository.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace DBRepository.Repositories
{
    public abstract class BaseRepository
    {
        protected string ConnectionString { get; }

        public BaseRepository(string connectionString)
        {
            ConnectionString = connectionString;
        }
    }
}