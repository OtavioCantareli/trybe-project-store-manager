const sinon = require("sinon");
const { expect } = require("chai");
const { allProducts, singleProduct } = require("../mocks/products");
const connection = require("../../../models/connection");

const error = { message: "Product not found" };

describe("Requesting products with GET", () => {
  beforeEach(async () => {
    sinon.stub(connection, "execute").resolves();
  });
  afterEach(async () => {
    connection.execute.restore();
  });
  describe("All products", async () => {
    const response = await Products.getAll();
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
    const response = await Products.findOne(1);
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
