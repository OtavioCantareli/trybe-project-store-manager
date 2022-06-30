const Products = require('../models/Products');

const getAll = async () => {
  const object = await Products.getAll();
  return object;
};

const findById = async (id) => {
  const object = await Products.findById(id);
  return object;
};

module.exports = {
  getAll,
  findById,
};