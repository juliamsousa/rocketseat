class List 
{
    constructor()
    {
        this.data = [];
    }

    add(data)
    {
        this.data.push(data);
        console.log(this.data);
    }
}

class ToDoList extends List
{
    // chamamos o construtor da classe pai
    constructor()
    {
        super();
    }

    mostraUsuario()
    {
        console.log(this.usuario);
    }
}

var minhaLista = new ToDoList();

document.getElementById('novoToDo').onclick = function ()
{
    minhaLista.add("Novo Todo");
}

// o valor da const nao pode ser reatribuido ao contrario da var
// const é read only
const a = 1;
// o valor de var pode ser reatribuido sempre que necessario
var c = 3;
c=10;

// classe matematica com metodo static
class Matematica 
{
    // static define um metodo statico
    // ele nao exnxerga o resto da classe
    static soma(a, b)
    {
        return a+b;
    }
}

// utilizacao do metodo static sem a necessidade de instanciar um objeto da classe
console.log("Resultado: "+Matematica.soma(a,c));

// podemos mutar(mutacao) a variavel
// trabalhamos com um mesmo tipo de objeto mas podemos mudar valores dentro dele
// nao podemos reatribuir o objeto/valor em si, mas seus atributos sim
const usuario = { nome: "Diego"};
console.log("O nome do usuario é: "+usuario.nome);

// fazendo a mutacao
usuario.nome = "Cleitu";
console.log("Nome do usuário apos mutacao: "+usuario.nome);

// varivaeis de escopo: estudar variaveis let e escopo

// operacaoes com array 

const array = [1, 3, 4, 5, 8, 9]

// a funcao map percorre cada elemento do array e permite realziar uma determinada acao com os itens, separadamente
// nesse caso somamos o item com seu indice
// o newArray sera composto pelos elementos do array original somados com seus indices 
const newArray = array.map(function(item, index)
{
    return item+index;
});

console.log("O novo array é: "+newArray);

// na primeira execucao total = 0
// 1ª iteração: 0 + 1
// 2ª iteração: 1 + 3
// 3ª iteração: 4 + 4
// 4ª iteração: 8 + 5
// ... e assim por diante até somar todos os elementos
const sum = array.reduce(function(total, next){
    return total+next;
});

console.log("A soma é: "+sum);

// a funcao filter filtra os elementos do array de acordo com uma condicao
// nesse caso filter = numeros pares contidos dentro do array
const filter = array.filter(function(item){
    return item%2===0;
});

console.log("O filtro resulta em: "+filter);

// a funcao find permite encontrar um elemento
const find = array.find(function(item)
{
    return item===4;
});

console.log("Item encontrado: "+find);

// funcoes sem nome sao consideradas funcoes anonimas 
// desse modo é propicio o uso de arrow functions
// quando temos apenas um parametro podemos retirar os parenteses
const newArrowArray = array.map(item =>
{
    return item*2;
});

// podemos reduzir mais ainda a rrow function
// quando no retorno temos algo bem simples podemos coloca-lo dentro dos parenteses
const newReducedArray = array.map(item=> item*2);

console.log('Array usando arrow function =>: '+newArrowArray);
console.log('Array usando arrow function reduzida =>: '+newArrowArray);

// podemos definir valores padrao para os parametros de nossas funcoes
// funciona tanto para functions e arrow functions
// desse modo evitamos a nao definicao NaN mesmo que falte algum parametro na chamada da funcao
const soma = (a=0, b=0) => a+b;

console.log("Soma com dois parametros: "+soma(1,2));
console.log("Soma com um parametro: "+soma(1));

// desestruturacao, suportado do es6 para frente
const usuario2 =
{
    nome: 'Julia',
    idade: 20,
    endereco:
    {
        cidade:"Vale",
        estado:"HM",
    },
};

// desse modo evitamos a utilizacao de usuario.cidade.estado
// podemos acessar os dados de forma mais facil
const {nome, idade, endereco:{cidade, estado}} = usuario2;

console.log("Nome: "+nome);
console.log("Idade: "+idade);
console.log("Endereco: "+cidade+", "+estado);

// podemos usar a desestruturacao tambem em funcoes
// nao usamos o objeto inteiro como parametros, usamos apenas os atributos necessarios
function mostraNome({nome, idade})
{
    console.log("Nome: "+nome+", idade: "+idade);
}

mostraNome(usuario2);

// operadores rest/spread
// o rest serve para pegar os "resto" das propriedades
const user = 
{
    name: 'User',
    idade: 34,
    empresa: 'RocketSeat'
};

const {name, ...resto } = user;

console.log("Nome usando rest: "+name);
console.log("Resto: "+resto);

// REST tambem pode ser utilizado para arrays
const secondArray = [0, 1, 1, 2, 3, 5, 8, 13, 21];

const [x, y, ...z] = secondArray;

console.log(x);
console.log(y);
console.log(z);

// REST tambem pode ser utilizado como parametros de funcoes
function somaRest (a, b, ...params)
{
    return params;
}

const r = somaRest(1,2,3,4,5,6,7,6,5454,534,7);

console.log(r);

// SPREAD repassa as informacoes de um objeto/array para outra estrutura de dados

const thirdArray = [0,20,4,5,6];
const fourthArray = [3,7,7,54,2];

const fifthArray = [...thirdArray, ...fourthArray];

console.log("Array usando SPREAD: "+fifthArray);

// SPREAD pode ser utilizado tambem para copiar informacoes de um usuario para outro
const informacoes = 
{
    login: 'MinhaCasa',
    psswd: 'podeEntrar'
}

const informacoesAlteradas = {...informacoes, login: "loginAlterado"};
console.log("Informacoes alteradas: "+informacoesAlteradas);

// Template Literals, nos permite colocar variaveis dentro de uma String
// Reduz e limpa o codigo de concatenacao de strings e variaveis
console.log(`Meu usuario é ${informacoes.login} e senha é ${informacoes.psswd}`);

// Object Short Syntax
// na sintaxe curta de objeto, quando o nome de uma variavel equivale ao nome de um atributo do objeto pdoemos apenas usar seu nome
// o valor da variavel já é definido como atributo do objeto
const surname = 'Sousa';
const age = 20;

const eu = 
{
    nome: 'Julia',
    surname,
    empresa:'Bold Bytes',
};

console.log(`Meus dados ${eu}.`);