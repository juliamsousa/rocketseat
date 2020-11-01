// importacao do express
const express = require('express');
const routes = express.Router();

// importacao do ProductController e seus metodos
const ProductController = require('./controllers/ProductController');

// rotas para cada metodo
// POST: sempre que vamos criar algo usamos uma rota post
// no express podemos usar um parametro dentro da rota com :nomeParametro
routes.get("/products", ProductController.index);
routes.get("/products/:id", ProductController.show);
routes.post("/products", ProductController.store);
routes.put("/products/:id", ProductController.update);
routes.delete("/products/:id", ProductController.delete);

// exportacao do arquivo
module.exports = routes;