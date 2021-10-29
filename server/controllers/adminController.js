const { User } = require("../models/");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { loginValidate } = require("./validate");

const adminController = {
  login: async function (req, res) {
    const { error } = loginValidate(req.body);
    if (error) return res.status(400).send(error.message);

    const selectedUser = await User.findOne({
      where: { email: req.body.email },
    //   também verificar se o usuario é admin no banco
    });
    if (!selectedUser) {
      return res.status(400).send("Email incorreto");
    }

    const passwordAndUserMatch = bcrypt.compareSync(
      req.body.password,
      selectedUser.password
    );
    if (!passwordAndUserMatch)
      return res.status(400).send("Email ou senha incorreto");

    const token = jwt.sign(
      { _id: selectedUser._id, admin: selectedUser.admin },
      process.env.TOKEN_SECRET
    );
    res.header("authorization-token", token);
    res.send(token);
  },
};

module.exports = adminController;