const { validateId } = require('../middlewares/validateIdAndQuant');
const Products = require('../services/Products');

const getAll = async (_req, res) => {
  const products = await Products.getAll();
  return res.status(200).send(products);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const product = await Products.findById(id);
  if (product.length < 1) {
    return res.status(404).send({ message: 'Product not found' });
  }
  return res.status(200).send(product[0]);
};

const insert = async (req, res) => {
  const { name } = req.body;
  const product = await Products.insert(name);
  const { insertId } = product;
  return res.status(201).send({
    id: insertId,
    name,
  });
};

const insertSale = async (req, res) => {
  validateId(req, res);
  const { productId, quantity } = req.body;
  const sale = await Products.insertSale(productId, quantity);
  return res.status(201).send(sale);
};

module.exports = {
  getAll,
  findById,
  insert,
  insertSale,
};
