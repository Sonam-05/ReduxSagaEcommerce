const { registerCtrl, loginCtrl } = require("../controllers/userController");

const express = require("express");

const router = express.Router();

//routes
//registerCtrl route || POST
router.post('/register', registerCtrl);

//loginCtrl route || POST
router.post('/login', loginCtrl)

module.exports = router;