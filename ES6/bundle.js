"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var List = /*#__PURE__*/function () {
  function List() {
    _classCallCheck(this, List);

    this.data = [];
  }

  _createClass(List, [{
    key: "add",
    value: function add(data) {
      this.data.push(data);
      console.log(this.data);
    }
  }]);

  return List;
}();

var ToDoList = /*#__PURE__*/function (_List) {
  _inherits(ToDoList, _List);

  var _super = _createSuper(ToDoList);

  // chamamos o construtor da classe pai
  function ToDoList() {
    _classCallCheck(this, ToDoList);

    return _super.call(this);
  }

  _createClass(ToDoList, [{
    key: "mostraUsuario",
    value: function mostraUsuario() {
      console.log(this.usuario);
    }
  }]);

  return ToDoList;
}(List);

var minhaLista = new ToDoList();

document.getElementById('novoToDo').onclick = function () {
  minhaLista.add("Novo Todo");
}; // o valor da const nao pode ser reatribuido ao contrario da var
// const é read only


var a = 1; // o valor de var pode ser reatribuido sempre que necessario

var c = 3;
c = 10; // classe matematica com metodo static

var Matematica = /*#__PURE__*/function () {
  function Matematica() {
    _classCallCheck(this, Matematica);
  }

  _createClass(Matematica, null, [{
    key: "soma",
    // static define um metodo statico
    // ele nao exnxerga o resto da classe
    value: function soma(a, b) {
      return a + b;
    }
  }]);

  return Matematica;
}(); // utilizacao do metodo static sem a necessidade de instanciar um objeto da classe


console.log("Resultado: " + Matematica.soma(a, c)); // podemos mutar(mutacao) a variavel
// trabalhamos com um mesmo tipo de objeto mas podemos mudar valores dentro dele
// nao podemos reatribuir o objeto/valor em si, mas seus atributos sim

var usuario = {
  nome: "Diego"
};
console.log("O nome do usuario é: " + usuario.nome); // fazendo a mutacao

usuario.nome = "Cleitu";
console.log("Nome do usuário apos mutacao: " + usuario.nome); // varivaeis de escopo: estudar variaveis let e escopo
// operacaoes com array 

var array = [1, 3, 4, 5, 8, 9]; // a funcao map percorre cada elemento do array e permite realziar uma determinada acao com os itens, separadamente
// nesse caso somamos o item com seu indice
// o newArray sera composto pelos elementos do array original somados com seus indices 

var newArray = array.map(function (item, index) {
  return item + index;
});
console.log("O novo array é: " + newArray); // na primeira execucao total = 0
// 1ª iteração: 0 + 1
// 2ª iteração: 1 + 3
// 3ª iteração: 4 + 4
// 4ª iteração: 8 + 5
// ... e assim por diante até somar todos os elementos

var sum = array.reduce(function (total, next) {
  return total + next;
});
console.log("A soma é: " + sum); // a funcao filter filtra os elementos do array de acordo com uma condicao
// nesse caso filter = numeros pares contidos dentro do array

var filter = array.filter(function (item) {
  return item % 2 === 0;
});
console.log("O filtro resulta em: " + filter); // a funcao find permite encontrar um elemento

var find = array.find(function (item) {
  return item === 4;
});
console.log("Item encontrado: " + find); // funcoes sem nome sao consideradas funcoes anonimas 
// desse modo é propicio o uso de arrow functions
// quando temos apenas um parametro podemos retirar os parenteses

var newArrowArray = array.map(function (item) {
  return item * 2;
}); // podemos reduzir mais ainda a rrow function
// quando no retorno temos algo bem simples podemos coloca-lo dentro dos parenteses

var newReducedArray = array.map(function (item) {
  return item * 2;
});
console.log('Array usando arrow function =>: ' + newArrowArray);
console.log('Array usando arrow function reduzida =>: ' + newArrowArray); // podemos definir valores padrao para os parametros de nossas funcoes
// funciona tanto para functions e arrow functions
// desse modo evitamos a nao definicao NaN mesmo que falte algum parametro na chamada da funcao

var soma = function soma() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return a + b;
};

console.log("Soma com dois parametros: " + soma(1, 2));
console.log("Soma com um parametro: " + soma(1)); // desestruturacao, suportado do es6 para frente

var usuario2 = {
  nome: 'Julia',
  idade: 20,
  endereco: {
    cidade: "Vale",
    estado: "HM"
  }
}; // desse modo evitamos a utilizacao de usuario.cidade.estado
// podemos acessar os dados de forma mais facil

var nome = usuario2.nome,
    idade = usuario2.idade,
    _usuario2$endereco = usuario2.endereco,
    cidade = _usuario2$endereco.cidade,
    estado = _usuario2$endereco.estado;
console.log("Nome: " + nome);
console.log("Idade: " + idade);
console.log("Endereco: " + cidade + ", " + estado); // podemos usar a desestruturacao tambem em funcoes
// nao usamos o objeto inteiro como parametros, usamos apenas os atributos necessarios

function mostraNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log("Nome: " + nome + ", idade: " + idade);
}

mostraNome(usuario2); // operadores rest/spread
// o rest serve para pegar os "resto" das propriedades

var user = {
  name: 'User',
  idade: 34,
  empresa: 'RocketSeat'
};

var name = user.name,
    resto = _objectWithoutProperties(user, ["name"]);

console.log("Nome usando rest: " + name);
console.log("Resto: " + resto); // REST tambem pode ser utilizado para arrays

var secondArray = [0, 1, 1, 2, 3, 5, 8, 13, 21];
var x = secondArray[0],
    y = secondArray[1],
    z = secondArray.slice(2);
console.log(x);
console.log(y);
console.log(z); // REST tambem pode ser utilizado como parametros de funcoes

function somaRest(a, b) {
  for (var _len = arguments.length, params = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    params[_key - 2] = arguments[_key];
  }

  return params;
}

var r = somaRest(1, 2, 3, 4, 5, 6, 7, 6, 5454, 534, 7);
console.log(r); // SPREAD repassa as informacoes de um objeto/array para outra estrutura de dados

var thirdArray = [0, 20, 4, 5, 6];
var fourthArray = [3, 7, 7, 54, 2];
var fifthArray = [].concat(thirdArray, fourthArray);
console.log("Array usando SPREAD: " + fifthArray); // SPREAD pode ser utilizado tambem para copiar informacoes de um usuario para outro

var informacoes = {
  login: 'MinhaCasa',
  psswd: 'podeEntrar'
};

var informacoesAlteradas = _objectSpread(_objectSpread({}, informacoes), {}, {
  login: "loginAlterado"
});

console.log("Informacoes alteradas: " + informacoesAlteradas); // Template Literals, nos permite colocar variaveis dentro de uma String
// Reduz e limpa o codigo de concatenacao de strings e variaveis

console.log("Meu usuario \xE9 ".concat(informacoes.login, " e senha \xE9 ").concat(informacoes.psswd)); // Object Short Syntax
// na sintaxe curta de objeto, quando o nome de uma variavel equivale ao nome de um atributo do objeto pdoemos apenas usar seu nome
// o valor da variavel já é definido como atributo do objeto

var surname = 'Sousa';
var age = 20;
var eu = {
  nome: 'Julia',
  surname: surname,
  empresa: 'Bold Bytes'
};
console.log("Meus dados ".concat(eu, "."));
