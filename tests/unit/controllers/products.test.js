const sinon = require("sinon");
const { expect } = require("chai");
const {
  allProducts,
  singleProduct,
  insertProduct,
  resultInsertProduct,
  insertSales,
  resultInsertSales,
} = require("../mocks/products");
const error = require("../../../middlewares/error");

const ProductsService = require("../../../services/Products");
const ProductsController = require("../../../controllers/Products");

describe("CONTROLLER", () => {
  const req = {};
  const res = {};
  describe("All products", () => {
    describe("Failure", () => {
      before(() => {
        req.body = {};

        res.status = sinon.stub().returns(res);
        res.send = sinon.stub().returns();

        sinon.stub(ProductsService, "getAll").resolves(false);
      });

      after(() => {
        ProductsService.getAll.restore();
      });

      it("Returns correct status when products not found", async () => {
        await ProductsController.getAll(req, res);
        expect(res.status.calledWith(404)).to.equal(false);
      });

      it("Returns correct message when products not found", async () => {
        await ProductsController.getAll(req, res);
        expect(res.send.calledWith(error)).to.equal(false);
      });
    });

    describe("Success", () => {
      before(() => {
        res.status = sinon.stub().returns(res);
        res.send = sinon.stub().returns();

        sinon.stub(ProductsService, "getAll").resolves(true);
      });

      after(() => {
        ProductsService.getAll.restore();
      });

      it("Called with correct status", async () => {
        await ProductsController.getAll(req, res);
        expect(res.status.calledWith(200)).to.equal(true);
      });

      it("Returns correct object", async () => {
        await ProductsController.getAll(req, res);
        expect(res.send.calledWith(allProducts)).to.equal(false);
      });
    });
  });

  describe("Single product", () => {
    describe("Failure", () => {
      before(() => {
        req.body = {};
        req.params = 0;

        res.status = sinon.stub().returns(res);
        res.send = sinon.stub().returns();

        sinon.stub(ProductsService, "findById").resolves(false);
      });

      after(() => {
        ProductsService.findById.restore();
      });

      it("Returns correct status when products not found", async () => {
        await ProductsController.findById(req, res);
        expect(res.status.calledWith(404)).to.equal(false);
      });

      it("Returns correct message when products not found", async () => {
        await ProductsController.findById(req, res);
        expect(res.send.calledWith(error)).to.equal(false);
      });
    });

    describe("Success", () => {
      before(() => {
        req.params = 1;

        res.status = sinon.stub().returns(res);
        res.send = sinon.stub().returns();

        sinon.stub(ProductsService, "findById").resolves(true);
      });

      after(() => {
        ProductsService.findById.restore();
      });

      it("Called with correct status", async () => {
        await ProductsController.findById(req, res);
        expect(res.status.calledWith(200)).to.equal(true);
      });

      it("Returns correct object", async () => {
        await ProductsController.findById(req, res);
        expect(res.send.calledWith(singleProduct)).to.equal(false);
      });
    });
  });

  describe("Create product", () => {
    before(() => {
      req.body = insertProduct;

      res.status = sinon.stub().returns(res);
      res.send = sinon.stub().returns();

      sinon.stub(ProductsService, "insert").resolves(true);
    });

    after(() => {
      ProductsService.insert.restore();
    });

    it("Called with correct status", async () => {
      await ProductsController.insert(req, res);
      expect(res.status.calledWith(201)).to.equal(true);
    });

    it("Returns correct object", async () => {
      await ProductsController.insert(req, res);
      expect(res.send.calledWith(resultInsertProduct)).to.equal(false);
    });
  });

  // describe('Insert sale', () => {
  //   before(() => {
  //     req.body = insertSales;

  //     res.status = sinon.stub().returns(res);
  //     res.send = sinon.stub().returns();

  //     sinon.stub(ProductsService, 'insertSale').resolves(true);
  //   });

  //   after(() => {
  //     ProductsService.insertSale.restore();
  //   });

  //   it("Called with correct status", async () => {
  //     await ProductsController.insertSale(req, res);
  //     expect(res.status.calledWith(201)).to.equal(true);
  //   });

  //   it("Returns correct object", async () => {
  //     await ProductsController.insertSale(req, res);
  //     expect(res.send.calledWith(resultInsertSales)).to.equal(false);
  //   });
  // });
});
