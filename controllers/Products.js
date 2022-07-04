const Products = require('../services/Products');

const getAll = async (_req, res) => {
  const products = await Products.getAll();
  return res.status(200).send(products);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const product = await Products.findById(id);
  if (product.length < 1) {
    return res.status(404).send({ message: 'Product not found' });
  }
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

const insertSale = async (req, res) => {
  const obj = req.body;
  const { prods } = await Products.insertSale(obj);
  return res.status(201).json(prods);
};

const getAllSales = async (_req, res) => {
  const sales = await Products.getAllSales();
  return res.status(200).json(sales);
};

const getSalesById = async (req, res) => {
  const { id } = req.params;
  const sales = await Products.getSalesById(id);
  if (sales.length < 1) {
    return res.status(404).json({ message: 'Sale not found' });
  }
  return res.status(200).json(sales);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const prod = await Products.findById(id);
  if (prod.length < 1) {
    return res.status(404).json({ message: 'Product not found' });
  }
  const { name } = req.body;
  await Products.updateProduct({ id, name });
  res.status(200).json({ id, name });
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const prod = await Products.findById(id);
  if (prod.length < 1) {
    return res.status(404).json({ message: 'Product not found' });
  }
  await Products.deleteProduct(id);
  return res.status(204).end();
};

module.exports = {
  getAll,
  findById,
  insert,
  insertSale,
  getAllSales,
  getSalesById,
  updateProduct,
  deleteProduct,
};
