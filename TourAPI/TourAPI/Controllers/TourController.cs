using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TourAPI.Models;

namespace TourAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
[Produces("application/json")]
public class ToursController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public ToursController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpGet("all")]
    public async Task<ActionResult<IEnumerable<Tour>>> GetAllTours()
    {
        var tours = await _context.Tours.ToListAsync();
        return Ok(tours);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Tour>> GetTourById(int id)
    {
        var tour = await _context.Tours.FirstOrDefaultAsync(t => t.Id == id);
        if (tour == null) return NotFound();
        return Ok(tour);
    }

    // 🔥 Фильтрация по теме, длительности, направлению и сортировке
    [HttpGet("filter")]
    public async Task<ActionResult<IEnumerable<Tour>>> FilterTours(
        [FromQuery] string[] theme,
        [FromQuery] string[] duration,
        [FromQuery] string[] destination,
        [FromQuery] string? sort)
    {
        var query = _context.Tours.AsQueryable();

        if (theme.Length > 0)
            query = query.Where(t => theme.Contains(t.Type));

        if (duration.Length > 0)
            query = query.Where(t => duration.Contains(t.Duration));

        if (destination.Length > 0)
            query = query.Where(t => destination.Contains(t.Destination));

        query = sort switch
        {
            "popular" => query.OrderByDescending(t => t.Reviews),
            "price_low" => query.OrderBy(t => Decimal.Parse(t.Cost.Replace("$", ""))),
            "price_high" => query.OrderByDescending(t => Decimal.Parse(t.Cost.Replace("$", ""))),
            _ => query
        };

        return Ok(await query.ToListAsync());
    }
}