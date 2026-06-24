async function obterClima() {
    
    try
    {

        const url = "https://api.open-meteo.com/v1/forecast?latitude=-19.92&longitude=-43.94&current_weather=true";

        const response = await fetch(url);

        if(!response.ok)
        {
            throw new Error("Problema no caminho da API devido rede");
        }
        const dados = await response.json();

        //const temperatura = dados.current_weather.temperature;

        document.getElementById("exibirclima").innerText = `Temperatura atual: ${dados.current_weather.temperature} ${dados.current_weather_units.temperature}`;
    }
    catch(error)
    {
        console.error(error)
        document.getElementById("exibirclima").innerText = "Houve um problema ao comunicar com API externa"
    }
    
}
document.getElementById("obterClima")
.addEventListener("click", obterClima)



