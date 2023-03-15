const express = require('express');
const router = express.Router();

const { PostController } = require('../controllers');
const controller = new PostController()

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/posts');
  },
  filename: function (req, file, cb) {
		
    cb(null, file.originalname)
  }
});
const upload = multer({ storage: storage });
const cpUpload = upload.fields([{ name: 'postimage1' }, { name: 'postimage2' }])


router.get('/', controller.getAll);
router.post('/', cpUpload, controller.addPost);

module.exports = router;
