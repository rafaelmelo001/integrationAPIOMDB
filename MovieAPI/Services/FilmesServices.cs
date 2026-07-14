using MovieAPI.Model;
using MovieAPI.DTO;

namespace MovieAPI.Service
{
    public class FilmesService
    {
        private readonly HttpClient _httpClient;//variável que guarda o objeto HTTP
        private readonly string _apikey;
        public FilmesService(HttpClient httpClient)//construtor recebe o objeto e guarda no _httpClient 
        {                                          // e inicializa o objeto cada vez que for criado
            _httpClient = httpClient;
            _apikey = Environment.GetEnvironmentVariable("OMDB_APIKEY")
                        ?? throw new Exception("OMDB_APIKEY não configurada");
        }
        public async Task<MovieDTO> BuscarFilme(string nomeFilme)//metodo
        {

            var urlBase = "http://www.omdbapi.com/";
            var url = $"{urlBase}?apikey={_apikey}&t={nomeFilme}";

            var response = await _httpClient.GetAsync(url)//recebo o objeto que a API retornou
                ?? throw new InvalidOperationException("Não foi possível ler objeto retornado");

            var dados  = await response.Content.ReadFromJsonAsync<Movie>()//ler o conteudo
                ?? throw new InvalidOperationException("Não foi possível converter o conteúdo");


            return new MovieDTO
            {
                Title = dados.Title,
                Year = dados.Year,
                Director = dados.Director,
                Genre = dados.Genre,
                Runtime = dados.Runtime,
                ImdbRating = dados.ImdbRating,
                Plot = dados.Plot,
                Poster = dados.Poster 
            };
        }
    }
}