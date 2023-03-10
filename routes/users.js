const express = require('express');
const router = express.Router();

const { ClientsController } = require('../controllers');
const controller = new ClientsController()

/* GET users listing. */
router.get('/', controller.getAll);
router.post('/', controller.addClient);

module.exports = router;
