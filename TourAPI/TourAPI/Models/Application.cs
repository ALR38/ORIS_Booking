namespace TourAPI.Models;

public class Application
{
    public int Id { get; set; }
    public int TourId { get; set; }
    public Tour Tour { get; set; }
    public string FullName { get; set; }
    public string Country { get; set; }
    public string Email { get; set; }
    public string Phone { get; set; }
    public string Comment { get; set; }
    public DateTime SubmissionDate { get; set; }
}