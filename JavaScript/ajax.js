// ajax é uma forma de requisitar informacoes do servidor
// XMLHttpRequest é uma classe do JavaScript que nos permite utilizar o Ajax
var xhr = new XMLHttpRequest ();

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
        // JSON.parse transforma o JSON em um objeto ou vetor
        console.log(JSON.parse(xhr.responseText));
    }
}