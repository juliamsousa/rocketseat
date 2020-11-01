// o nodemon permite atualizar o server a cada alteracao
// nao é necessario fechar e rodar o servidor de novo
// rodamos npm run dev
// podemos executar os scripts dentro de package.json: npm run 'nome do script'
// mongoose é um orm de bancos nao relacionais que encapsula as operacaoes
// requre dir é uma biblioteca que faz os requires automaticamente em todos os aruivos de um diretorio
// o cors permite que a aplicacao seja acessada publicamente

// imports/requests
const express = require('express');
const mongoose = require('mongoose');
const requireDir = require ('require-dir');
const cors = require('cors');

// inicializacao do app
const app = express();

// express.json() permite a enviar e utilizar dados no formato JSON
// cors permite que a aplicao seja acessada publicamente
app.use(express.json());
app.use(cors());

// inicializacao do db
mongoose.connect ('mongodb://localhost:27017/nodeapi',{useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    return console.log('Deu bao!');
})
.catch(err => {
    return console.log("Deu ruim: "+err.message);
});

// fazer o require dos diretorios para registrar o model na nossa aplicacao
// o require-dir faz o require em todos os arquivos de um diretorio automaticamente, nao sendo necessario fazer em todos os arquivos
requireDir('./src/models');

// Rotas
// o use é um 'coringa' aceita todo tipo de requisicao
// nossa rota sera localhost/3001/api/...
app.use('/api', require("./src/routes"));

// primeira rota
// a mensagem é visivel em http://localhost:3001/api
app.get("/api", (req, res) =>
{
    return res.send("Ta rodando esse trem");
});

// criacao do model
const Product = mongoose.model('Product');

// porta que o servidor irá ouvir
app.listen(3001);