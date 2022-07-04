const Products = require('../models/Products');

let idSale;

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

const addProd = ({ productId, quantity }) => {
  Products.insertSale({ saleId: idSale, productId, quantity });
  return { productId, quantity };
};

const insertSale = async (sales) => {
  idSale = await Products.addSale();
  const itemsSold = sales.map(addProd);
  return { prods: { id: idSale, itemsSold } };
};

const getAllSales = async () => {
  const sales = await Products.getAllSales();
  const sale = sales.map(
    ({ date, product_id: productId, sale_id: saleId, quantity }) => ({
      date,
      saleId,
      productId,
      quantity,
    }),
  );
  return sale;
};

const getSalesById = async (id) => {
  const sales = await Products.getSalesById(id);
  const sale = sales.map(({ date, product_id: productId, quantity }) => ({
    date,
    productId,
    quantity,
  }));
  return sale;
};

const updateProduct = async ({ id, name }) => {
  // if (!name) return { code: 400, message: '"name" is required' };
  // if (name.length < 5) {
  //   return {
  //     code: 422,
  //     message: '"name" length must be at least 5 characters long'
  //   };
  // }
  // const prod = await Products.findById(id);
  // if (exists.length === 0) return { code: 404, message: 'Product not found' };
  await Products.updateProduct({ id, name });
  return { id, name };
};

const deleteProduct = async (id) => {
  // const exists = await Products.findById(id);
  // if (exists.length === 0) return { code: 404, message: 'Product not found' };
  await Products.delete(id);
  return true;
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
