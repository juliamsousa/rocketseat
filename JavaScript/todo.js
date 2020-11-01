// recuperacao de cada elemento que sera manipulado
var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

// como cada elemento da lista é apenas texto fazemos um array de strings
// caso tivessemos outros atributos nos elementos do toDo poderiamos fazer um array de objetos
/*var toDos = 
[
    'Fazer café',
    'Estudar JavaScript',
    'Acessar comunidade RocketSeat'
];*/

// a lsita de toDos sera recuperada do localStorage
// como os dados estao salvos na forma de JSON o parse os retorna na forma de string
// || [] define um default caso nao consigamos recuperar os valores
// desse modo teremos um array vazio
var toDos = JSON.parse(localStorage.getItem('list_todos')) || [];

// funcao que renderiza os toDos de acordo com os elementos do array
function renderToDos ()
{   
    // tudo que tiver dentro da ul ficara como vazio
    // removendo o conteudo da listElement
    listElement.innerHTML = '';

    // for especifico para array que percorre elemento por elemento
    for (toDo of toDos)
    {
        //console.log("Resultado do todo: "+toDo);
        // cria um lemento li
        // cria um node de texto
        var toDoElement = document.createElement('li');
        var toDoText = document.createTextNode(toDo);

        // cria um link a 
        // define seu atributo um "#" que nao possui nenhuma função
        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#')
        var linkText = document.createTextNode('Excluir');
        linkElement.appendChild(linkText);

        // armazena a posicao do elemento na variavel pos
        // define a acao do click do link a funcao deleteToDo
        var pos = toDos.indexOf(toDo);
        linkElement.setAttribute('onclick', 'deleteToDo('+pos+')');

        // define o node de texto como filho do li
        // define o link como filho de li
        // define o elemento li como filho do elemento ul
        toDoElement.appendChild(toDoText);
        toDoElement.appendChild(linkElement);
        listElement.appendChild(toDoElement);
   }
}

renderToDos();

function addToDo ()
{
    // recupera o valor do campo input
    var toDoText = inputElement.value;

    // adiciona o novo ToDo ao array
    // limpa o conteudo do input
    // renderiza o novo ToDo criado
    toDos.push(toDoText);
    inputElement.value=" ";

    // renderiza os ToDos novamente
    // salva os ToDos em localStorage
    renderToDos();
    saveToStorage();
}

// adiciona a funcao addToDo como acao do click do botao
buttonElement.onclick = addToDo;

// funcao que remove um item toDo a partir de um indice
function deleteToDo (pos)
{   
    // remove um item do array a partir de uma posiçao
    // fornece uma posicao e a quantidade de itens que serao removidos a partir dela
    // renderiza os elementos novamente
    toDos.splice(pos,1);

    // renderiza os ToDos novamente
    // salva os ToDos em localStorage
    renderToDos();
    saveToStorage();
}

function saveToStorage ()
{
    // podemos acessar o local storage atraves da variavel globla localStorage
    // o setItem nos permite armazenar um item no localStorage
    // essa funcao só permite gravar um elemento na forma de string
    // com o elemento JSON podemos gravar o array inteiro
    // o metodo stringfy transforma o array em uma string no formato JSON
    localStorage.setItem('list_toDos', JSON.stringify(toDos));
}