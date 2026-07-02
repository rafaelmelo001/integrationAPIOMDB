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

        display.innerHTML = 
        `
        <ul>
            <li><strong>Título:</strong> ${dados.Title}</li>
            <li><strong>Ano:</strong> ${dados.Year}</li>
            <li><strong>Classificação:</strong> ${dados.Rated}</li>
            <li><strong>Lançamento:</strong> ${dados.Released}</li>
            <li><strong>Duração:</strong> ${dados.Runtime}</li>
            <li><strong>Gênero:</strong> ${dados.Genre}</li>
            <li><strong>Diretor:</strong> ${dados.Director}</li>
            <li><strong>Roteiristas:</strong> ${dados.Writer}</li>
            <li><strong>Atores:</strong> ${dados.Actors}</li>
            <li><strong>Sinopse:</strong> ${dados.Plot}</li>
            <li><strong>Idioma:</strong> ${dados.Language}</li>
            <li><strong>País:</strong> ${dados.Country}</li>
            <li><strong>Prêmios:</strong> ${dados.Awards}</li>
            <li><strong>IMDb:</strong> ${dados.imdbRating}</li>
            <li><strong>Votos:</strong> ${dados.imdbVotes}</li>
            <li><strong>Bilheteria:</strong> ${dados.BoxOffice}</li>
        </ul>
        `;

    }
    catch(error)
    {
        console.error(error)
    }
});


