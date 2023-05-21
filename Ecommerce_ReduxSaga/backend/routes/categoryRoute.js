const express = require("express");

const { createCategoryCtrl, updateCategoryCtrl, getAllCategoriesCtrl, getSingleCategoryCtrl, deleteCategoryCtrl } = require("../controllers/categoryController");

const router = express.Router();

//routes
//create-category || POST
router.post('/create-category', createCategoryCtrl)

//update-category || PUT
router.put('/update-category/:id', updateCategoryCtrl);

//delete-category || DELETE
router.delete('/delete-category/:id', deleteCategoryCtrl);

//get-all-categories 
router.get('/get-all-categories', getAllCategoriesCtrl);

//get-single-category
router.get('/get-single-category/:id', getSingleCategoryCtrl);

module.exports = router;