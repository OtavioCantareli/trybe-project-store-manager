const connection = require('./connection');

const getAll = async () => {
  const [products] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );
  if (products.length < 1) return undefined;
  return products;
};

const findById = async (id) => {
  const [product] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?',
    [id],
  );
  if (product.length < 1) return undefined;
  return product;
};

module.exports = {
  getAll,
  findById,
};