
export async function getFilm(nomeFilme)
{

    const response = await fetch(`https://integrationapiomdb.onrender.com/api/Filmes?nome=${nomeFilme}`);
    
    if(!response.ok)
    {
        throw new Error("Algum problema ao comunicar com API")
    }

    const dados = await response.json();

    return dados;
}