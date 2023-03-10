const express = require('express');
const router = express.Router();

const { PostController } = require('../controllers');
const controller = new PostController()


router.get('/', controller.getAll);
router.post('/', controller.addPost);

module.exports = router;
