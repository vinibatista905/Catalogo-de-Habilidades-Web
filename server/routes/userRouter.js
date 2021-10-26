const express = require("express");
const router = express.Router();
const userController = require('../controllers/userController');

router.post("/register", userController.register)
router.post("/login", userController.login)
router.post("/forgot_password", userController.forgot_password)


module.exports = router;