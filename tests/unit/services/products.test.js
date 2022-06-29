const { expect } = require("chai");
const sinon = require("sinon");
const { allProducts, singleProduct } = require("../mocks/products");
const Products = require("../../../services/Products");
const error = require('../../../middlewares/error');

describe("SERVICE", () => {
  describe("All products", () => {
    beforeEach(() => {
      sinon.stub(Products, "getAll").resolves(allProducts);
    });

    afterEach(() => {
      Products.getAll.restore();
    });

    it("Returns error when product does not exist", async () => {
      const response = await Products.getAll();
      expect(response).to.equal(error);
    });

    it("Returns an object", async () => {
      const response = await Products.getAll();
      expect(response).to.equal(allProducts);
    });
  });

  describe("Single product", () => {
    beforeEach(() => {
      sinon.stub(Products, "findById").resolves(singleProduct);
    });

    afterEach(() => {
      Products.findById.restore();
    });

    it("Returns error when product does not exist", async () => {
      const response = await Products.findById(999999999);
      expect(response).to.equal(error);
    });

    it("Returns an object", async () => {
      const response = await Products.findById(1);
      expect(response).to.equal(singleProduct);
    });
  });
});
