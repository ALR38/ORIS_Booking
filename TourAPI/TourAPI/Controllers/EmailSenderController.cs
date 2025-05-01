using System.Net;
using System.Net.Mail;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TourAPI.Models;

namespace TourAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class EmailSenderController : ControllerBase
{
    private readonly ILogger<EmailSenderController> _logger;
    private readonly ApplicationDbContext _context;

    public EmailSenderController(ILogger<EmailSenderController> logger, ApplicationDbContext context)
    {
        _logger = logger;
        _context = context;
    }

    /// <summary>
    /// Отправить email клиенту и администратору.
    /// </summary>
    [HttpPost]
    public async Task<IActionResult> SendEmail([FromBody] FormModel formData)
    {
        try
        {
            var tour = await _context.Tours.FirstOrDefaultAsync(t => t.Id == formData.TourId);
            if (tour == null)
            {
                _logger.LogWarning("Tour with ID {TourId} not found.", formData.TourId);
                return NotFound(new { message = "Tour not found" });
            }

            var smtpClient = new SmtpClient("smtp.yandex.ru")
            {
                Port = 587,
                Credentials = new NetworkCredential("g.arthur.a@yandex.ru", "ayefwbrefvczzpzp"),
                EnableSsl = true,
            };

            ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12;

            // Письмо клиенту
            var userMail = new MailMessage
            {
                From = new MailAddress("g.arthur.a@yandex.ru", "Tour Booking Team"),
                Subject = "Ваша заявка на тур принята",
                Body = $"<h2>Уважаемый(ая) {formData.FullName}!</h2>" +
                       $"<p>Благодарим вас за обращение в нашу компанию. Ваша заявка на бронирование тура успешно получена.</p>" +
                       $"<p><strong>Данные вашей заявки:</strong><br>" +
                       $"- Тур: {tour.Title}<br>" +
                       $"- ФИО: {formData.FullName}<br>" +
                       $"- Контактный телефон: {formData.Phone}<br>" +
                       $"- Электронная почта: {formData.Email}<br>" +
                       $"- Страна: {formData.Country}</p>" +
                       $"<p>Наш менеджер свяжется с вами в ближайшее время для уточнения деталей.</p>" +
                       $"<p>С уважением,<br>Команда Tour Guide</p>",
                IsBodyHtml = true,
                BodyEncoding = System.Text.Encoding.UTF8,
                SubjectEncoding = System.Text.Encoding.UTF8
            };
            userMail.To.Add(formData.Email);

            // Письмо администратору
            var adminMail = new MailMessage
            {
                From = new MailAddress("g.arthur.a@yandex.ru", "Tour Booking Team"),
                Subject = $"Новая заявка на тур #ID{formData.TourId}",
                Body = $"<h2>Новая заявка на бронирование тура</h2>" +
                       $"<p><strong>Данные клиента:</strong><br>" +
                       $"- Тур: {tour.Title}<br>" +
                       $"- ФИО: {formData.FullName}<br>" +
                       $"- Телефон: {formData.Phone}<br>" +
                       $"- Email: {formData.Email}<br>" +
                       $"- Страна: {formData.Country}<br>" +
                       $"- Дата подачи: {DateTime.UtcNow:dd MMMM yyyy, HH:mm}</p>",
                IsBodyHtml = true,
                BodyEncoding = System.Text.Encoding.UTF8,
                SubjectEncoding = System.Text.Encoding.UTF8
            };
            adminMail.To.Add("azmitov38@gmail.com");

            smtpClient.Send(userMail);
            smtpClient.Send(adminMail);

            _logger.LogInformation("Emails sent successfully for tour ID {TourId}.", formData.TourId);
            return Ok(new { message = "Emails sent successfully" });
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Failed to send emails for tour ID {TourId}.", formData.TourId);
            return BadRequest(new { message = "Failed to send emails", error = ex.Message });
        }
    }
}