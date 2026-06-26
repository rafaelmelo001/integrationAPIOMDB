
/*CONSUMINDO API DE CLIMA OPEN MATEO */

const urlclima = 
"https://api.open-meteo.com/v1/forecast?latitude=-19.92&longitude=-43.94&current_weather=true";

export async function obterClima() 
{
    const response = await fetch(urlclima);

    if(!response.ok)
    {
        throw new Error ("Problema ao obter response da API externa")
    }

    const info = await response.json();

    return info;


}



