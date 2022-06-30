const sinon = require("sinon");
const { expect } = require("chai");
const { allProducts, singleProduct } = require("../mocks/products");
const connection = require("../../../models/connection");
const { getAll, findById } = require('../../../models/Products');
const error = require('../../../middlewares/error');

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

    it("Returns error if empty", async () => {
      const execute = []
      sinon.stub(connection, 'execute').resolves(execute);
      const response = await getAll();
      expect(response).to.equal(error);
    })
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

    it("Returns error if empty", async () => {
      const execute = []
      sinon.stub(connection, 'execute').resolves(execute);
      const response = await findById();
      expect(response).to.equal(error);
    })
  });
});
