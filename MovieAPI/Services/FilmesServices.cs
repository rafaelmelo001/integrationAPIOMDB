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
        public async Task<string> BuscarFilme(string nomeFilme)//metodo
        {

            var urlBase = "http://www.omdbapi.com/";
            var url = $"{urlBase}?apikey={_apikey}&t={nomeFilme}";

            var response = await _httpClient.GetAsync(url);//recebo o objeto que a API retornou

            if(!response.IsSuccessStatusCode)//validação
            {
                return "Erro ao buscar filme, verifique o console";
            }

            var dados  = await response.Content.ReadAsStringAsync();//ler o conteudo


            return dados;
        }
    }
}