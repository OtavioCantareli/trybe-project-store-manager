const allProducts = [
  {
    id: 1,
    name: "Martelo de Thor",
  },
  {
    id: 2,
    name: "Traje de encolhimento",
  },
];

const singleProduct = {
  id: 1,
  name: "Martelo de Thor",
};

const insertProduct = {
  name: "ProdutoX",
};

const resultInsertProduct = {
  id: 4,
  name: "ProdutoX",
};

const insertSales = [
  {
    productId: 1,
    quantity: 1,
  },
  {
    productId: 2,
    quantity: 5,
  },
];

const resultInsertSales = {
  id: 3,
  itemsSold: [
    {
      productId: 1,
      quantity: 1,
    },
    {
      productId: 2,
      quantity: 5,
    },
  ],
};

module.exports = {
  allProducts,
  singleProduct,
  insertProduct,
  resultInsertProduct,
  insertSales,
  resultInsertSales,
};
