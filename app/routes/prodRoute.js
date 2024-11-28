const express = require('express');
const router = express.Router();
const prodController = require('../controllers/prodController');




router.post('/products',prodController.addProduct)


router.get('/products', prodController.getAllProducts);


router.get('/products/:id', prodController.getProductById);



router.put('/products/:id', prodController.updateProduct);



router.delete('/products/:id', prodController.deleteProduct);



module.exports = router;
