
async function obterEndereco() 
{

    try
    {
        const cep = "https://viacep.com.br/ws/32605314/json/";

        const response = await fetch(cep);

        if(!response.ok)
        {
            throw new Error("Problema ao comunicar com API externa")
        }

        const info = await response.json();

        document.getElementById("exibirendereco").innerHTML = 
            `  
                <ul>
                    <li>Rua: ${info.logradouro}</li>
                    <li>Bairro: ${info.bairro}</li>
                    <li>Cidade: ${info.localidade}</li>
                    <li>Estado: ${info.estado}</li>
                </ul>  
            `;

    }
    catch(error)
    {
        console.error(error)
        document.getElementById("exibirendereco").innerText = "Problema ao conseguir endereço"
    }

}

document.getElementById("obterEndereco")
.addEventListener("click", obterEndereco)