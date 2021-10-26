const { User } = require("../models/");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const mailer = require("../modules/mailer");

const { loginValidate, registerValidate } = require("./validate");

const userController = {
  register: async function (req, res) {
    const { error } = registerValidate(req.body);
    if (error) return res.status(400).send(error.message);

    const selectedUser = await User.findOne({
      where: { email: req.body.email },
    });
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

    const selectedUser = await User.findOne({
      where: { email: req.body.email },
    });
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
    res.send(token);
  },

  forgot_password: async function (req, res) {
    const { email } = req.body;

    try {
      const user = await User.findOne({ where: { email } });

      if (!user) {
        return res.status(400).send({ error: "Usuário não encontrado" });
      } else {
        const token = crypto.randomBytes(20).toString("hex");

        const now = new Date();
        now.setHours(now.getHours() + 1);

        user.passwordResetToken = token;
        user.passwordResetExpires = now;
        await user.save();

        console.log(token, now);
        res.status(200).send("Token gerado com sucesso");

        mailer.sendMail(
          {
            to: email,
            from: "vudmbbatista@gmail.com",
            template: "auth/forgot_password",
            context: { token },
          },
          (err) => {
            if (err) {
              return res
                .status(400)
                .send({ error: "Não foi possível enviar o email" });
            } else {
              return res.status(200).send("Token enviado para o seu e-mail.");
            }
          }
        );
      }
    } catch (error) {
      res
        .status(400)
        .send({ error: "Erro no esqueci a senha, tente novamente" });
    }
  },
};

module.exports = userController;
