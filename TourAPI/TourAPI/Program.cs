using Microsoft.EntityFrameworkCore;
using TourAPI;
using TourAPI.DataSeeds;

var builder = WebApplication.CreateBuilder(args);

// Подключение к PostgreSQL
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseNpgsql(connectionString));

// Swagger и контроллеры
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// CORS для React
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp", policy =>
    {
        policy.WithOrigins("http://localhost:5173")
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});
var app = builder.Build();

// CORS и Swagger
app.UseCors("AllowReactApp");

app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "TourAPI v1");
    c.RoutePrefix = "swagger";
});

app.UseAuthorization();
app.MapControllers();

// Инициализация БД и сидинг
using (var scope = app.Services.CreateScope())
{
    var context = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();

    var retries = 10;
    var delay = TimeSpan.FromSeconds(2);

    for (int i = 0; i < retries; i++)
    {
        try
        {
            context.Database.Migrate();

            // Очистка и сидинг
            if (context.Tours.Any())
            {
                context.Tours.RemoveRange(context.Tours);
                context.SaveChanges();
            }

            context.Tours.AddRange(Seed.Tours);
            context.SaveChanges();

            Console.WriteLine("✅ Сидинг выполнен.");
            break;
        }
        catch (Exception ex)
        {
            Console.WriteLine($"⏳ Попытка {i + 1}/{retries}: жду БД... ({ex.Message})");
            Thread.Sleep(delay);
        }
    }
}

app.Run("http://0.0.0.0:80");