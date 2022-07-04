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

// const insertSale = async (sales) => {
//   const sale = await Promise.all(
//     sales.map((sal) => Products.insertSale(sal.productId, sal.quantity)),
//   );
//   console.log('service', sale.insertId);
//   return sale;
// };

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

module.exports = {
  getAll,
  findById,
  insert,
  // insertSale,
  getAllSales,
  getSalesById,
};
