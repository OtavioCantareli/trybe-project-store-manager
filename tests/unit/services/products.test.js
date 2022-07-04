const { expect } = require("chai");
const sinon = require("sinon");
const {
  allProducts,
  singleProduct,
  resultInsertProduct,
  resultInsertSales,
  insertSales,
} = require("../mocks/products");
const Products = require("../../../services/Products");

describe("SERVICE", () => {
  describe("Get all products", () => {
    it("Returns an object", async () => {
      sinon.stub(Products, "getAll").resolves(allProducts);
      const response = await Products.getAll();
      expect(response).to.be.instanceOf(Object);
    });

    it("Object equals mock", async () => {
      const response = await Products.getAll();
      expect(response).to.equal(allProducts);
    });
  });

  describe("Get single product", () => {
    it("Returns an object", async () => {
      sinon.stub(Products, "findById").resolves(singleProduct);
      const response = await Products.findById(1);
      expect(response).to.be.instanceOf(Object);
    });

    it("Object equals mock", async () => {
      const response = await Products.findById(1);
      expect(response).to.equal(singleProduct);
    });
  });

  describe("Create product", () => {
    it("Returns an object", async () => {
      sinon.stub(Products, "insert").resolves(resultInsertProduct);
      const response = await Products.insert("ProdutoX");
      expect(response).to.be.instanceOf(Object);
    });

    it("Object equals mock", async () => {
      const response = await Products.insert("ProdutoX");
      expect(response).to.equal(resultInsertProduct);
    });
  });

  describe("Insert sale", () => {
    it("Returns an object", async () => {
      sinon.stub(Products, "insertSale").resolves(resultInsertSales);
      const response = await Products.insertSale(insertSales);
      expect(response).to.be.instanceOf(Object);
    });

    it("Object equals mock", async () => {
      const response = await Products.insertSale(insertSales);
      expect(response).to.equal(resultInsertSales);
    });
  });
});
