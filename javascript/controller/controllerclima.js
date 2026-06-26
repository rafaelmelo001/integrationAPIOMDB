
import {obterClima} from "../service/climaAPI.js";

document.getElementById("obterClima").addEventListener("click", async function(){

    try{

        const info = await obterClima();

        document.getElementById("exibirclima").innerText = 
        `Temperatura: ${info.current_weather.temperature}`;
    }
    catch(error)
    {
        console.error(error)
        document.getElementById("exibirclima").innerText = 
        `Problema ao retornar dados`;
    }
}

);