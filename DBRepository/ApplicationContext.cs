using Model;
using Microsoft.EntityFrameworkCore;

namespace DBRepository
{
    public class ApplicationContext : DbContext
    {
        //public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options)
        //{

        //}

        public DbSet<Auditory> Auditorys { get; set; }
        public DbSet<Curriculum> Curriculums { get; set; }
        public DbSet<Departament> Departaments { get; set; }
        public DbSet<Faculty> Facultys { get; set; }
        public DbSet<Group> Groups { get; set; }
        public DbSet<Lesson> Occupations { get; set; }
        public DbSet<Request> Requests { get; set; }
        public DbSet<Time> SchlTimes { get; set; }
        public DbSet<Speciality> Specialitys { get; set; }
        public DbSet<Subject> Subjects { get; set; }
        public DbSet<Teacher> Teachers { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql("Host=localhost;Port=5432;Database=nubipschedule;Username=nubip;Password=nubip12345");
        }
    }
}
