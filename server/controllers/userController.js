const { User } = require("../models/");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { loginValidate, registerValidate } = require("./validate");


const userController = {
  register: async function (req, res) {
    const { error } = registerValidate(req.body);
    if (error) return res.status(400).send(error.message);

    const selectedUser = await User.findOne({ where: { email: req.body.email }});
    if (selectedUser) {
      return res.status(400).send("Email já existe");
    }

    const user = {
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password),
    };

    try {
      const savedUser = await User.create(user);
      res.status(200).send(savedUser);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  login: async function (req, res) {
    const { error } = loginValidate(req.body);
    if (error) return res.status(400).send(error.message);

    const selectedUser = await User.findOne({where:{ email: req.body.email }});
    if (!selectedUser) {
      return res.status(400).send("Email ou senha incorreto");
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
    res.send("Usuário Logado");
  },
};

module.exports = userController;
