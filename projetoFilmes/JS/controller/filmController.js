import {getFilm} from "../service/movieApiService.js"

const display = document.getElementById("showContent");
const message = document.getElementById("message");


document.getElementById("getFilm").addEventListener("click", async function (){

    try {

    const nomeFilme = document.getElementById("filme").value.trim();

    if (nomeFilme === "") {

        message.innerText = "Informe um filme que queira buscar.";
        display.classList.remove("show");

        return;
    }

    message.innerText = "";

    const dados = await getFilm(nomeFilme);

    display.innerHTML = `
        <img src="${dados.poster}" alt="${dados.title}">

        <div class="movie-info">
            <h2>${dados.title}</h2>

            <p><strong>Ano:</strong> ${dados.year}</p>
            <p><strong>Diretor:</strong> ${dados.director}</p>
            <p><strong>Gênero:</strong> ${dados.genre}</p>
            <p><strong>Duração:</strong> ${dados.runtime}</p>
            <p><strong>IMDb:</strong> ⭐ ${dados.imdbRating}</p>
            <p>${dados.plot}</p>
        </div>
    `;

    display.classList.add("show");

}
catch (error) {

    display.classList.remove("show");
    message.innerText = "Erro ao buscar o filme.";

    console.error(error);

}});