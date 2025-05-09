using Microsoft.EntityFrameworkCore;
using TourAPI;

var builder = WebApplication.CreateBuilder(args);

// Подключение к PostgreSQL
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseNpgsql(connectionString));

// Swagger и контроллеры
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// CORS — разрешить всё (или конкретный фронт)
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp", policy =>
    {
        policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
    });
});

var app = builder.Build();

app.UseCors("AllowReactApp");

app.UseSwagger();

app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/api/swagger/v1/swagger.json", "TourAPI v1");
    c.RoutePrefix = "swagger";
});

app.UseAuthorization();
app.MapControllers();

try
{
    using var scope = app.Services.CreateScope();
    var context = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
    Console.WriteLine("⏳ Пробую подключиться к базе данных...");
    context.Database.Migrate();
    Console.WriteLine("✅ Подключение к БД успешно, миграция применена (если была).");
}
catch (Exception ex)
{
    Console.WriteLine($"❌ Ошибка при подключении к базе данных: {ex.Message}");
}

app.Run();