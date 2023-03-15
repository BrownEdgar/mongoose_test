const express = require('express');
const router = express.Router();

const { ClientsController } = require('../controllers');
const controller = new ClientsController()

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    //Այստեղ նշում ենք պապկի անունը(հասցեն)
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    //Այստեղ նշում ենք Ֆայլլի անունը  անունը
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });


/* GET users listing. */
router.get('/', controller.getAll);
router.post('/', upload.single('avatar'), controller.addClient);
router.delete('/:id', upload.single('avatar'), controller.deleteClientById);

module.exports = router;
