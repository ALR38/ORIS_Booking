namespace TourAPI.Models;

public class Tour
{
    public int Id { get; set; }
    public string Image { get; set; }
    public string Type { get; set; }
    public string Title { get; set; }
    public string Duration { get; set; }
    public string Cost { get; set; }
    public int Reviews { get; set; }
    public string Destination { get; set; }
}