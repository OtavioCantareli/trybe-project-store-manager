const sinon = require("sinon");
const { expect } = require("chai");
const { allProducts, singleProduct } = require("../mocks/products");
const connection = require("../../../models/connection");
const { getAll, findById } = require('../../../models/Products');

describe("MODEL", () => {
  describe("All products", () => {

    afterEach(async () => {
      connection.execute.restore();
    });
    
    it("Returns an object", async () => {
      const execute = [allProducts]
      sinon.stub(connection, 'execute').resolves(execute);
      const response = await getAll();
      expect(response).to.equal(allProducts);
    });
  });

  describe("Single product", () => {

    afterEach(async () => {
      connection.execute.restore();
    });
    
    it("Returns an object", async () => {
      const execute = [singleProduct]
      sinon.stub(connection, "execute").resolves(execute);
      const response = await findById(1);
      expect(response).to.equal(singleProduct);
    });
  });
});
