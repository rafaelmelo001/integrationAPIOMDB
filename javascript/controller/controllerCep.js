import {getCEP} from "../service/cepAPI.js";

document.getElementById("getCEP")
.addEventListener("click", async function(){

    try{
        const data = await getCEP();

        display.innerText =
        `   Rua: ${data.logradouro}
            Bairro: ${data.bairro}
            Cidade: ${data.estado}
            UF: ${data.uf}
        `;
    }
    catch(error)
    {
        console.error(error)
        display.innerText = `Problema ao informar endereço`;
    }
    
});

const display = document.getElementById("displayAddress")
