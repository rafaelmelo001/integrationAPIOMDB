import {getFilm} from "../service/movieApiService.js"

const display = document.getElementById("showContent");

document.getElementById("getFilm").addEventListener("click", async function (){

    try{
        
        const nomeFilme = document.getElementById("filme").value.trim();

        if(nomeFilme === "")
        {
            display.innerText = "Informe um título que queira buscar";
            return;//impedindo de fazer uma rquest se o campo for vazio, assim nem bate na API
        }

        const dados = await getFilm(nomeFilme);

        display.innerHTML = `
    <img src="${dados.Poster}" alt="${dados.Title}">

    <div class="movie-info">
        <h2>${dados.Title}</h2>

        <p><strong>Ano:</strong> ${dados.Year}</p>
        <p><strong>Diretor:</strong> ${dados.Director}</p>
        <p><strong>Gênero:</strong> ${dados.Genre}</p>
        <p><strong>Duração:</strong> ${dados.Runtime}</p>
        <p><strong>IMDb:</strong> ⭐ ${dados.imdbRating}</p>
        <p>${dados.Plot}</p>
    </div>
`;

    }
    catch(error)
    {
        console.error(error)
    }
});


