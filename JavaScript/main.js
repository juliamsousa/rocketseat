// PROMISES são codigos e funcoes que nao alteram a linha do tempo do codigo
// Devolvem um valor de resultado de sucesso ou erro só depois de certo tempo
// O resto do código continua funcionando normalmente

var minhaPromise = function ()
{
    return new Promise(function (resolve, reject)
    {
        var xhr= new XMLHttpRequest();
        // essa api do github fornece as informacaoes de um usuario atraves de um JSON
        // essa requisicao retornara um JSON
        xhr.open('GET', 'https://api.github.com/users/juliamsousa');
        xhr.send(null);

        xhr.onreadystatechange = function ()
        {
            // verifica se o estado mudou
            // 4 significa que a resposta voltou
            if(xhr.readyState === 4)
            {
                // status 200 é o status de sucesso
                // em resolve temos a resposta trazida pela requisicao transformada em objeto pelo JSON.parse
                if (xhr.status === 200)
                {
                    resolve(JSON.parse(xhr.responseText));
                }
                    else
                    {
                        reject('Erro na requisição');
                    }
            }
        }
    });
}


// fazer atribuicao do resultado da promise a uma variavel nao e recomendado
// para isso utilizamos o .then .catch
// o resolve chama o .then
// o reject chama o .catch

/*var reultado = minhaPromise();
console.log("O resultado da promise é: "+resultado);*/

// colocamos ; ao final do catch apenas
// se tivermos algum codigo que dependa do resultado da promise seria interessante coloca-lo no escopo de then

minhaPromise()
    .then(function(response)
    {
        console.log(response);
    })

    .catch(function(error)
    {
        console.warn(error);
    });