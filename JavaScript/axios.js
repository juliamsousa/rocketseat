// o axios é um encapsulamento do XMLHttpsRequest
// o axios ja entende que a resposta da requisicao é um JSON e nos retorna um objeto JS de forma direta

// permite requisicoes de forma mais facil
axios.get('https://api.github.com/users/juliamsousa')
    // .then é disparado quando a promise é resolvida sem erro
    .then(function(response)
    {
        console.log(response);
    })
    // .catch é disparado quando a promisa apresenta erro
    .catch(function(error)
    {
        console.warn(error);
    });

// desafio
// exercicio 1 modulo 4
// funçao que retorna uma promise para verificar se uma pessoa é maior de idade
// caso seja é resolvida, caso não, é rejeitada
function checaIdade(idade)
{
    return new Promise(function (resolve, reject)
    {
        if (idade>=18)
            resolve('Maior que 18');
            else   
                reject('Menor que 18');
    });
}

// captura do resolve e do reject
checaIdade (37)
    .then(function(resolve)
    {
        console.log(resolve);
    })

    .catch(function(reject)
    {
        console.log(reject);
    });

// exercicio 2 do modulo 4
// define uma funcao para o click do botao
// busca o botao a partir de seu id
var buttonElement = document.querySelector('#addButton');
buttonElement.onclick = function retornaUsuario()
{
    // seleciona a input a partir de seu id
    var inputElement = document.querySelector('#user');
    // armazena o valor do input em uma variavel
    var user = inputElement.value;

    // faz uma requisicao a api do github atraves do axios
    axios.get('https://api.github.com/users/'+user+'/repos')
        // caso a promise seja resolvida
        .then(function(response)
        {
            // seleciona o container que contera a lista de repositorios
            var containerElement = document.querySelector('#repos')
            // cria a lista ul de elementos
            var ulElement = document.createElement('ul');
            // armazena o array de repositorios advindo da requisicao em uma variavel
            var repos = response.data;
            
            // percorre o array de repositorios e os adiciona a lista
            for (var i=0; i<repos.length; i++)
            {
                // cria um elemento li
                var liElement = document.createElement('li');
                // cria um elemento texto com o nome do repositorio
                var textoRepo = document.createTextNode(repos[i].name);

                // define o texto com o nome do repositorio como filho da lista
                liElement.appendChild(textoRepo);
                // define o elemento li como filho da lista ul
                ulElement.appendChild(liElement);
            }

            // define a lista ul como filha do container principal
            containerElement.appendChild(ulElement);
        })


        // caso a promise seja rejeitada
        .catch(function(error)
        {
            // imprime no console a rejeicao da promise
            console.warn(error);
        });
}

// exercicio 3 do modulo 4
// busca o botao a partir de seu id
// define uma acao para o click do botao
var buttonElement2 = document.querySelector('#addButton2');
buttonElement2.onclick = function retornaUsuario()
{
    // busca a input atraves do seu id
    var inputElement2 = document.querySelector('#user2');
    // busca o container atraves de seu id
    var containerElement = document.querySelector('#repos')
    // armazena o conteudo do input em uma variavel
    var user = inputElement2.value;

    // faz a requisicao na api do git
    axios.get('https://api.github.com/users/'+user+'/repos')
        // caso a promise seja respondida
        .then(function(response)
        {
            // cria um node de texto
            var textLoading = document.createTextNode('Carregando...');
            // define o node de texto como filho do container principal
            containerElement.appendChild(textLoading);           
        })

        // caso a promise seja rejeitada
        .catch(function(error)
        {
            // cria um node de texto
            var textError = document.createTextNode(error);
            // define o node de texto como filho do container principal
            containerElement.appendChild(textError);
        });
};
