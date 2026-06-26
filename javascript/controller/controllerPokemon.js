import { getPokemon } from "../service/pokemonAPI.js";

document.getElementById("getPokemon").addEventListener("click", async function()
{
    try
    {
        const info = await getPokemon();

        document.getElementById("exibirPokemon").innerHTML = 
        
        `Pokemon: ${info.species.name}
         Tipo: ${info.types[0].type.name}
         <img src="${info.sprites.front_default}">
        `;
    }
    catch(error)
    {
        console.error(error)
        document.getElementById("exibirPokemon").innerText = 
        `Problema ao retornar informação, verifique o console`;
    }
});