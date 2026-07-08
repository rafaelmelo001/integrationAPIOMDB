using MovieAPI.Service;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();//vai mapear controllers automaticamente - PASSO 1

//Criei politica de CORS permitindo a o frontend que roda em outra porta '5500' chamar a API.
builder.Services.AddCors(option =>
{
    option.AddPolicy("Frontend", policy =>
    {
        policy.WithOrigins("http://127.0.0.1:5500",
                            "http://localhost:5500",
                            "https://integration-apiomdb-noho73jb4-rafael-melos-projects-32ef364c.vercel.app",
                            "integration-apiomdb-git-main-rafael-melos-projects-32ef364c.vercel.app").AllowAnyHeader().AllowAnyMethod();
    });
});

//=== registros ====
builder.Services.AddHttpClient();//registro do method request in HTTP
builder.Services.AddScoped<FilmesService>();//registrei que existe uma FilmesService, quando alguem pedir
builder.Services.AddOpenApi();              //ela entrega para o construtor

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.UseCors("Frontend");//deve ser criado junto da politica de CORS

app.UseAuthorization();

app.MapControllers();//vai mapear controllers automaticamente - PASSO 2

app.Run();
