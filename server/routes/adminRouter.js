const express = require("express");
const router = express.Router();
const adminController = require('../controllers/adminController');

const auth = require("../controllers/authController");

router.post("/login", adminController.login)


router.get("/", auth, (req, res) => {
  if (req.user.admin) {
    res.send("Esse é o adimn");
  } else {
    res.status(401).send("Não é Admin: Acesso Negado");
  }
});

module.exports = router;
