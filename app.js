const express = require('express');

const app = express();

app.use(express.json());

const ProductsController = require('./controllers/Products');
const validateName = require('./middlewares/validateName');
// const {
//   validateId,
//   validateQuant,
// } = require('./middlewares/validateIdAndQuant');

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', (req, res) => ProductsController.getAll(req, res));

app.get('/products/:id', (req, res) => ProductsController.findById(req, res));

app.post('/products', validateName, (req, res) =>
  ProductsController.insert(req, res));

// app.post('/sales', validateId, validateQuant, (req, res) =>
//   ProductsController.insertSale(req, res));

app.get('/sales', (req, res) => ProductsController.getAllSales(req, res));

app.get('/sales/:id', (req, res) => ProductsController.getSalesById(req, res));

app.put('/products/:id', validateName, (req, res) => {
  ProductsController.updateProduct(req, res);
});

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação
module.exports = app;
