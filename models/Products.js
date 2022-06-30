const connection = require('./connection');
const error = require('../middlewares/error');

const getAll = async () => {
  const [products] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );
  if (!products) return error;
  return products;
};

const findById = async (id) => {
  const [product] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?',
    [id],
  );
  if (!product) return error;
  return product;
};

module.exports = {
  getAll,
  findById,
};