 const express = require('express');
const { getAllProducts ,getProductById,addProduct ,updateProduct ,deleteProduct} = require('../controllers/productController');
const { protect , hasRole } = require('../controllers/authController');
 
 const router = express.Router();

 router.get('/',getAllProducts);
 router.get('/:productId', getProductById);
 router.post('/',protect, hasRole("Admin") , addProduct);
 router.patch("/:productId",updateProduct);
 router.delete('/:productId',deleteProduct)

 module.exports =router