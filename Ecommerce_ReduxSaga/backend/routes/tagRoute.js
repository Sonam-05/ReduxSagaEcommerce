const express = require("express");
const { createTagCtrl, updateTagCtrl, deleteTagCtrl, getSingleTagCtrl, getAllTagsCtrl } = require("../controllers/tagController");

const router = express.Router();

//routes
//create-tag || POST
router.post('/create-tag', createTagCtrl);

//update-tag || PUT
router.put('/update-tag/:id', updateTagCtrl);

//delete-tag || DELETE
router.delete('/delete-tag/:id', deleteTagCtrl);

//get-single-tag || GET
router.get('/get-single-tag/:slug', getSingleTagCtrl);

//get-all-tags || GET
router.get('/get-all-tags', getAllTagsCtrl);

module.exports = router;