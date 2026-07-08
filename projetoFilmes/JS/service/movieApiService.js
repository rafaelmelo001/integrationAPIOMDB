
export async function getFilm(nomeFilme)
{

    const response = await fetch(`http://localhost:3000/api/Filmes?nome=${nomeFilme}`);

    if(!response.ok)
    {
        throw new Error("Algum problema ao comunicar com API")
    }

    const dados = await response.json();

    return dados;
}