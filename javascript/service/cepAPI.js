
const urlCEP = "https://viacep.com.br/ws/32605314/json/";

export async function getCEP()
{
    const response = await fetch(urlCEP);

    if(!response.ok)
    {
        throw new Error("Problema ao comunicar com API externa")
    }
    const data = await response.json();

    if(data.erro)
    {
        throw new Error("Verifique o CEP");
    }
    
    return data;

}