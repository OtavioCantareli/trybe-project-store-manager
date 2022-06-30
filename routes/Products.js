const express = require('express');

const router = express.Router();

router.use('/', require('../controllers/Products').getAll);

router.use('/:id', require('../controllers/Products').findById);

module.exports = router;