const { findById } = require('../controllers/Products');

const validateId = (req, res, next) => {
  const obj = req.body;
  obj.forEach((item) => {
    if (!item.productId) {
      return res.status(400).send({ message: '"productId" is required' });
    }
    if (findById(item.productId).length < 1) {
      return res.status(404).send({ message: 'Product not found' });
    }
  });
  return next();
};

const validateQuant = (req, res, next) => {
  const obj = req.body;
  obj.forEach((item) => {
    if (!item.quantity) {
      return res.status(400).send({ message: '"quantity" is required' });
    }
    if (item.quantity < 1) {
      return res
        .status(422)
        .send({ message: '"quantity" must be greater than or equal to 1' });
    }
  });
  return next();
};

module.exports = {
  validateId,
  validateQuant,
};
