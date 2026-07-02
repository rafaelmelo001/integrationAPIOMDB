namespace MovieAPI.Service
{
    public class FilmesService
    {
        private readonly HttpClient _httpClient;
        public FilmesService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }
        public async Task<string> BuscarFilme(string nomeFilme)//metodo
        {
            var urlBase = "http://www.omdbapi.com/";
            var API_KEY = "7cdfc67a";
            var url = $"{urlBase}?apikey={API_KEY}&t={nomeFilme}";

            var response = await _httpClient.GetAsync(url);

            if(!response.IsSuccessStatusCode)//validação
            {
                return "Erro ao buscar filme";
            }

            var dados  = await response.Content.ReadAsStringAsync();//ler o conteudo


            return dados;
        }
    }
}