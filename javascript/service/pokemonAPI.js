/* CONSUMINDO API de pokemon pra testar response e request  */

const urlpokemon = "https://pokeapi.co/api/v2/pokemon/pikachu";

export async function getPokemon()
{
    const response = await fetch(urlpokemon);

    if(!response.ok)
    {
        throw new Error("Problema ao conectar a API externa")
    }
    const info = response.json();

    return info;
}