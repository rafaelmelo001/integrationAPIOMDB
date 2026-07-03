namespace MovieAPI.Service
{
    public class FilmesService
    {
        private readonly HttpClient _httpClient;//variável que guarda o objeto HTTP
        public FilmesService(HttpClient httpClient)//construtor recebe o objeto e guarda no _httpClient 
        {                                          // e inicializa o objeto cada vez que for criado
            _httpClient = httpClient;
        }
        public async Task<string> BuscarFilme(string nomeFilme)//metodo
        {

            var urlBase = "http://www.omdbapi.com/";
            var API_KEY = "7cdfc67a";
            var url = $"{urlBase}?apikey={API_KEY}&t={nomeFilme}";

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