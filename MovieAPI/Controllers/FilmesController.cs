using Microsoft.AspNetCore.Mvc;

using MovieAPI.Service;

namespace MovieAPI.Controller
{
    [ApiController]//essa classe é um controller de API
    [Route("api/[Controller]")]
    public class FilmesController : ControllerBase
    {
        private readonly FilmesService _filmesService;
        public FilmesController(FilmesService filmesService)
        {
            _filmesService = filmesService;//gravar a refenrencia da service
        }
        [HttpGet]
        public async Task<IActionResult> GetFilme([FromQuery]string nome)//metodo
        {
            var resultado = await _filmesService.BuscarFilme(nome);

            return Ok(resultado);
        }
    }
}

