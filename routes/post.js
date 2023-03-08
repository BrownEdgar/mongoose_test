const express = require('express');
const router = express.Router();

const { PostController } = require('../controllers');
const controller = new PostController()


router.get('/', controller.getAll);

module.exports = router;
