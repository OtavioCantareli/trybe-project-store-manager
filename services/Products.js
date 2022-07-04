const Products = require('../models/Products');

const getAll = async () => {
  const object = await Products.getAll();
  return object;
};

const findById = async (id) => {
  const object = await Products.findById(id);
  return object;
};

const insert = async (name) => {
  const object = await Products.insert(name);
  return object;
};

const insertSale = async ({ productId, quantity }) => {
  const sale = await Products.insertSale({ productId, quantity });
  return sale;
};

module.exports = {
  getAll,
  findById,
  insert,
  insertSale,
};
