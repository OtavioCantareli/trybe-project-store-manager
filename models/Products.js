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

const addSale = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES (NOW())',
  );
  return insertId;
};

const insertSale = async ({ saleId, productId, quantity }) => {
  const [sale] = await connection.execute(
    'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
    [saleId, productId, quantity],
  );
  return sale;
};

const getAllSales = async () => {
  const [sales] = await connection.execute(
    `SELECT sales_prods.sale_id, sales_prods.product_id, sales_prods.quantity, sales.date
      FROM StoreManager.sales_products AS sales_prods
      INNER JOIN StoreManager.sales AS sales
      ON sales.id = sales_prods.sale_id
      ORDER BY sales_prods.sale_id, sales_prods.product_id;`,
  );
  return sales;
};

const getSalesById = async (id) => {
  const [sales] = await connection.execute(
    `SELECT sales_prods.sale_id, sales_prods.product_id, sales_prods.quantity, sales.date
      FROM StoreManager.sales_products AS sales_prods
      INNER JOIN StoreManager.sales AS sales
      ON sales.id = sales_prods.sale_id
      WHERE sales_prods.sale_id = ?
      ORDER BY sales_prods.sale_id, sales_prods.product_id;`,
    [id],
  );
  return sales;
};

const updateProduct = async ({ id, name }) => {
  await connection.execute(
    `UPDATE StoreManager.products
      SET name = ?
      WHERE id = ?;`,
    [name, id],
  );
  return true;
};

const deleteProduct = async (id) => {
  await connection.execute('DELETE FROM StoreManager.products WHERE id = ?', [
    id,
  ]);
  return true;
};

module.exports = {
  getAll,
  findById,
  insert,
  insertSale,
  getAllSales,
  getSalesById,
  addSale,
  updateProduct,
  deleteProduct,
};
