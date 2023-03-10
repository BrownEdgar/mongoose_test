const express = require('express');
const router = express.Router();

const { ProductsController } = require('../controllers');
const controller = new ProductsController()


router.get('/', controller.getAll);
router.post('/', controller.addProduct);

module.exports = router;
