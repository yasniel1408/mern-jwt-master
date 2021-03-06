const express = require('express');
const router = express.Router();
const {isAuth} = require('../util/auth')

const productController = require('../controllers/ProductController');

router.get('/data-table', isAuth, productController.getDataTable)
router.get('/', productController.productAll)
router.get('/:id', isAuth, productController.productOne)
router.post('/', isAuth, productController.productSave)
router.put('/:id', isAuth, productController.productUpdate)
router.delete('/:id', isAuth, productController.productDelete)

module.exports = router;