const connection = require('./connection');

const getAll = async () => {
  const [products] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );
  return products;
};

const findById = async (id) => {
  const [product] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?',
    [id],
  );
  return product;
};

module.exports = {
  getAll,
  findById,
};