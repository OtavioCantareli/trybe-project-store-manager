const { expect } = require("chai");
const sinon = require("sinon");
const { allProducts, singleProduct } = require("../mocks/products");
const Products = require("../../../services/Products");

describe("SERVICE", () => {
  describe("All products", () => {

    it("Returns an object", async () => {
      sinon.stub(Products, "getAll").resolves(allProducts);
      const response = await Products.getAll();
      expect(response).to.be.instanceOf(Object);
    });
  });

  describe("Single product", () => {

    it("Returns an object", async () => {
      sinon.stub(Products, "findById").resolves(singleProduct);
      const response = await Products.findById(1);
      expect(response).to.be.instanceOf(Object);
    });
  });
});
