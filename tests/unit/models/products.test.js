const sinon = require("sinon");
const { expect } = require("chai");
const { allProducts, singleProduct } = require("../mocks/products");
const connection = require("../../../models/connection");
const { getAll, findById } = require('../../../models/Products');

const error = { message: "Product not found" };

describe("Requesting products with GET", () => {
  describe("All products", () => {

    const execute = [allProducts]

    beforeEach(async () => {
      sinon.stub(connection, 'execute').resolves(execute);
    });

    afterEach(async () => {
      connection.execute.restore();
    });

    
    it("Returns an object", async () => {
      const response = await getAll();
      expect(response).to.equal(allProducts);
    });
  });

  describe("Single product", () => {

    const execute = [singleProduct]

    beforeEach(async () => {
      sinon.stub(connection, "execute").resolves(execute);
    });

    afterEach(async () => {
      connection.execute.restore();
    });
    
    
    it("Returns an object", async () => {
      const response = await findById(1);
      expect(response).to.equal(singleProduct);
    });
  });
});
