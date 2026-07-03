using MovieAPI.Service;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();//vai mapear controllers automaticamente - PASSO 1

//Criei politica de CORS permitindo a o frontend que roda em outra porta '5500' chamar a API.
builder.Services.AddCors(option =>
{
    option.AddPolicy("Frontend", policy =>
    {
        policy.WithOrigins("http://127.0.0.1:5500").AllowAnyHeader().AllowAnyMethod();
    });
});

//=== registros ====
builder.Services.AddHttpClient();//reigtro do method request in HTTP
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
