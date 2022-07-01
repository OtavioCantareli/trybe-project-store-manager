const sinon = require("sinon");
const { expect } = require("chai");
const { allProducts, singleProduct, resultInsertProduct } = require("../mocks/products");
const connection = require("../../../models/connection");
const { getAll, findById, insert } = require('../../../models/Products');

describe("MODEL", () => {
  describe("Get all products", () => {

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

  describe("Get single product", () => {

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

  describe('Create product', () => {

    afterEach(async () => {
      connection.execute.restore();
    });

    it('Returns ok message', async () => {
      const execute = [resultInsertProduct]
      sinon.stub(connection, "execute").resolves(execute);
      const response = await insert('ProdutoX');
      expect(response).to.equal(resultInsertProduct);
    })
  });
});
