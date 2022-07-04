const sinon = require("sinon");
const { expect } = require("chai");
const {
  allProducts,
  singleProduct,
  resultInsertProduct,
  insertSales,
  resultInsertSales,
} = require("../mocks/products");
const connection = require("../../../models/connection");
const { getAll, findById, insert, insertSale } = require("../../../models/Products");

describe("MODEL", () => {
  describe("Get all products", () => {
    afterEach(async () => {
      connection.execute.restore();
    });

    it("Returns an object", async () => {
      const execute = [allProducts];
      sinon.stub(connection, "execute").resolves(execute);
      const response = await getAll();
      expect(response).to.equal(allProducts);
    });
  });

  describe("Get single product", () => {
    afterEach(async () => {
      connection.execute.restore();
    });

    it("Returns an object", async () => {
      const execute = [singleProduct];
      sinon.stub(connection, "execute").resolves(execute);
      const response = await findById(1);
      expect(response).to.equal(singleProduct);
    });
  });

  describe("Create product", () => {
    afterEach(async () => {
      connection.execute.restore();
    });

    it("Returns an object", async () => {
      const execute = [resultInsertProduct];
      sinon.stub(connection, "execute").resolves(execute);
      const response = await insert("ProdutoX");
      expect(response).to.equal(resultInsertProduct);
    });
  });

  describe("Insert sale", () => {
    afterEach(async () => {
      connection.execute.restore();
    });

    it("Returns an object", async () => {
      const execute = [resultInsertSales];
      sinon.stub(connection, "execute").resolves(execute);
      const response = await insertSale(insertSales);
      expect(response).to.equal(resultInsertSales);
    });
  })
});
