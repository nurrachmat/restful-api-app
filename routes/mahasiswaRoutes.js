const express = require('express');
const router = express.Router();
const mahasiswaController = require('../controllers/mahasiswaController');
// const cekApiKey = require('../middlewares/cekApiKey');
const verifyToken = require('../middlewares/verifyToken');
const hanyaRole = require('../middlewares/hanyaRole');

router.get('/', mahasiswaController.getAll);
router.get('/:id', mahasiswaController.getById);
// role admin dan user
router.post('/', verifyToken, hanyaRole('user', 'admin'), mahasiswaController.create);
router.put('/:id', verifyToken, hanyaRole('user', 'admin'), mahasiswaController.update);
// hanya admin
router.delete('/:id', verifyToken, hanyaRole('admin'), mahasiswaController.remove);

module.exports = router;