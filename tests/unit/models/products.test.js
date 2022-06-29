const sinon = require("sinon");
const { expect } = require("chai");
const { allProducts, singleProduct } = require("../mocks/products");
const connection = require("../../../models/connection");
const { getAll } = require('../../../models/Products');

const error = { message: "Product not found" };

describe("Requesting products with GET", () => {
  describe("All products", async () => {
    beforeEach(async () => {
      sinon.stub(connection, 'execute').resolves(allProducts);
    });

    afterEach(async () => {
      connection.execute.restore();
    });

    const response = await getAll();
    
    it("Returns an object", () => {
      expect(response).to.equal(allProducts);
    });

    it("Object contains correct size", () => {
      expect(response).to.have.length(2);
    });

    it("Product does not exist", () => {
      expect(response).to.equal(error);
    });
  });

  describe("Single product", async () => {
    beforeEach(async () => {
      sinon.stub(connection, "execute").resolves(singleProduct);
    });

    afterEach(async () => {
      connection.execute.restore();
    });
    
    const response = await Products.findById(1);
    
    it("Returns an object", () => {
      expect(response).to.equal(singleProduct);
    });
    
    it("Object contains correct size", () => {
      expect(response).to.have.length(1);
    });
    
    it("Product does not exist", () => {
      expect(response).to.equal(error);
    });
  });
});
