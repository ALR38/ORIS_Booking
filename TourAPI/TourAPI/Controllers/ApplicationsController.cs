using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TourAPI;
using TourAPI.Models;

namespace TourAPI.Controllers;

[ApiController]
[Route("api/apply-tour")]
public class ApplicationsController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public ApplicationsController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpPost]
    public async Task<IActionResult> CreateApplication([FromBody] FormModel formData)
    {
        var tour = await _context.Tours.FindAsync(formData.TourId);
        if (tour == null)
        {
            return NotFound(new { message = "Tour not found" });
        }

        var application = new Application
        {
            TourId = formData.TourId,
            Tour = tour,
            FullName = formData.FullName,
            Country = formData.Country,
            Email = formData.Email,
            Comment = formData.Comment,
            SubmissionDate = DateTime.UtcNow
        };

        _context.Applications.Add(application);
        await _context.SaveChangesAsync();

        return Ok(new { message = "Application created", applicationId = application.Id });
    }
}