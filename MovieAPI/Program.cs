using MovieAPI.Service;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();//vai mapear controllers automaticamente - PASSO 1

builder.Services.AddCors(option =>
{
    option.AddPolicy("Frontend", policy =>
    {
        policy.WithOrigins("http://127.0.0.1:5500").AllowAnyHeader().AllowAnyMethod();
    });
});

//=== registros ====
builder.Services.AddHttpClient();
builder.Services.AddScoped<FilmesService>();//registrei que existe uma FilmesServices
builder.Services.AddOpenApi();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.UseCors("Frontend");

app.UseAuthorization();

app.MapControllers();//vai mapear controllers automaticamente - PASSO 2

app.Run();
