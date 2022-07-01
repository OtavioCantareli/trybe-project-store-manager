const Products = require('../services/Products');

const getAll = async (_req, res) => {
  const products = await Products.getAll();
  return res.status(200).send(products);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const product = await Products.findById(id);
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

module.exports = {
  getAll,
  findById,
  insert,
};
