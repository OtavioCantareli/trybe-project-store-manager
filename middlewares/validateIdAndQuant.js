/* eslint-disable no-restricted-syntax */
const Products = require('../models/Products');

const validateId = async (req, res, next) => {
  const items = req.body;
  // items.map(async (o) => {
  //   const prod = await Products.findById(o.productId).then((lol) => console.log(lol));
  //   console.log(prod);
  // });
  items.map(async (item) => {
    // const all = await Products.findById(item.productId);
    // all.then((lol) => console.log(lol));
    // console.log('ALL', all);
    // console.log('FOR EACH TOP', item.productId);
    if (!item.productId || item.productId < 1) {
      // console.log('FOR EACH NO ID', item);
      return res.status(400).send({ message: '"productId" is required' });
    }
    // console.log('VALIDATE', await Products.findById(item.productId));
    if (!await Products.findById(item.productId)) {
      // console.log('FOR EACH NOT FOUND', item);
      return res.status(404).send({ message: 'Product not found' });
    }
  });
  // 
  // for (let i = 0; i < items.length; i += 1) {
  //   // if (!obj.productId || !obj.quantity) return res.status(500).json({ message: 'XABLAU' });
  //   // eslint-disable-next-line no-await-in-loop
  //   // const xablau = await Products.findById(obj[i].productId);
  //   // console.log('XABLAU', xablau[0].id);
  //   if (!items[i].productId) {
  //     // console.log('FOR EACH NO ID', obj[i].productId);
  //     return res.status(400).send({ message: '"productId" is required' });
  //   }
  //   if (!Products.findById(items[i].productId)) {
  //     // console.log('FOR EACH NOT FOUND', obj[i]);
  //     return res.status(404).send({ message: 'Product not found' });
  //   }
  // }

  // for (const item of items) {
  //   console.log('ALL', item);
  //   if (!item.productId) {
  //     return res.status(400).send({ message: '"productId" is required' });
  //   }
  // }
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
