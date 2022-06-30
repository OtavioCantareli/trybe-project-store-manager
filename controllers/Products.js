const Products = require('../services/Products');
const error = require('../middlewares/error');

const getAll = async (req, res) => {
  const products = await Products.getAll();
  if (products.length < 1) return res.status(404).send(error);
  return res.status(200).send(products);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const product = await Products.findById(id);
  if (product.length < 1) return res.status(404).send(error);
  return res.status(200).send(product[0]);
};

module.exports = {
  getAll,
  findById,
};
