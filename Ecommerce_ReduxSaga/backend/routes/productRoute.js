const { createProductCtrl, deleteProductCtrl, getAllProductsCtrl, updateProductCtrl, getSingleProductCtrl } = require("../controllers/productControllers");

const express = require("express");

const router = express.Router();

//routes
//create-product || POST
router.post('/create-product', createProductCtrl)

//update-product || PUT
router.put('/update-product/:id', updateProductCtrl);

//delete-product || DELETE
router.delete('/delete-product/:id', deleteProductCtrl);

//get-all-products 
router.get('/get-all-products', getAllProductsCtrl);

//get-single-product 
router.get('/get-single-product/:id', getSingleProductCtrl)

module.exports = router;