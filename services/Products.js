const Products = require('../models/Products');
const error = require('../middlewares/error');

const getAll = async () => {
  const object = await Products.getAll();
  console.log(object);
  if (object.length < 1) return error;
  return object;
};

const findById = async (id) => {
  const object = await Products.findById(id);
  if (object.length < 1) return error;
  return object;
};

module.exports = {
  getAll,
  findById,
};