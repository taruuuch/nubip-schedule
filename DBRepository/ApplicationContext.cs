using Model;
using Microsoft.EntityFrameworkCore;

namespace DBRepository
{
    public class ApplicationContext : DbContext
    {
        //public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options)
        //{

        //}

        public DbSet<Academic> Academic { get; set; }
        public DbSet<Auditorium> Auditorium { get; set; }
        public DbSet<AuditoriumType> AuditoriumType { get; set; }
        public DbSet<Building> Building { get; set; }
        public DbSet<Curriculum> Curriculum { get; set; }
        public DbSet<Degree> Degree { get; set; }
        public DbSet<Departament> Departament { get; set; }
        public DbSet<Faculty> Faculty { get; set; }
        public DbSet<Group> Group { get; set; }
        public DbSet<Lesson> Lesson { get; set; }
        public DbSet<Request> Request { get; set; }
        public DbSet<Speciality> Speciality { get; set; }
        public DbSet<Subject> Subject { get; set; }
        public DbSet<SubjectType> SubjectType { get; set; }
        public DbSet<Teacher> Teacher { get; set; }
        public DbSet<Time> Time { get; set; }
        public DbSet<EducationLevel> EducationLevel { get; set; }
        public DbSet<EducationForm> EducationForm { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql("Host=localhost;Port=5432;Database=nubipschedule;Username=nubip;Password=nubip12345");
        }
    }
}
