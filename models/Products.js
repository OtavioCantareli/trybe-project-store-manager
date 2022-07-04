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

const insert = async (name) => {
  const [product] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?)',
    [name],
  );
  return product;
};

const insertSale = async (productId, quantity) => {
  const [sale] = await connection.execute(
    'INSERT INTO StoreManager.sales_products (product_id, quantity) VALUES (?, ?)',
    [productId, quantity],
  );
  // console.log('insertSale', sale);
  return sale;
};

module.exports = {
  getAll,
  findById,
  insert,
  insertSale,
};
