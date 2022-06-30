const express = require('express');

const app = express();

const ProductsController = require('./controllers/Products');

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', (req, res) => ProductsController.getAll(req, res));

app.get('/products/:id', (req, res) => ProductsController.findById(req, res));

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;