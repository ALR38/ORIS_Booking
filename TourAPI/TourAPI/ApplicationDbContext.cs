using Microsoft.EntityFrameworkCore;
using TourAPI.Models;

namespace TourAPI;

public class ApplicationDbContext : DbContext
{
    public DbSet<Tour> Tours { get; set; }
    public DbSet<Application> Applications { get; set; }

    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Application>()
            .HasOne(a => a.Tour)
            .WithMany()
            .HasForeignKey(a => a.TourId);
    }
}