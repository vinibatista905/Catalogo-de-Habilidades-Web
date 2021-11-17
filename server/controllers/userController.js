const { User } = require("../models/");
const { Skill } = require("../models/");
const { AllSkills } = require("../models/");
const { Project } = require("../models/");
const { UserProject } = require("../models/");
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

    const userID = selectedUser.id;

    const userData = {
      auth_token: token,
      user_id: userID,
    };
    res.header("authorization-token", token);
    res.header("user-ID", userID);
    res.status(200).send(userData);
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

        const message = await mailer.sendMail(
          {
            from: "vudmbbatista@gmail.com",
            to: email,
            subject: "Token para alteração de senha",
            context: { token },
            text: `Utilize este token para alterar a sua senha: ${token}`,
            html: "<p>Segue seu token</p>",
          },
          (err) => {
            if (err) {
              return res
                .status(400)
                .send({ error: "Não foi possível enviar o email" });
            }
            return res.status(200).send("E-mail enviado com sucesso");
          }
        );
      }
    } catch (error) {
      res
        .status(400)
        .send({ error: "Erro no esqueci a senha, tente novamente" });
    }
  },

  reset_password: async function (req, res) {
    const { email, token } = req.body;
    const password = bcrypt.hashSync(req.body.password);

    try {
      const user = await User.findOne({
        where: { email: req.body.email, passwordResetToken: req.body.token },
      });

      if (!user) {
        return res.status(400).send({ error: "Usuário não encontrado" });
      }

      if (token !== user.passwordResetToken) {
        return res.status(400).send({ error: "Token inválido" });
      }

      const now = new Date();

      if (now > user.passwordResetExpires) {
        return res
          .status(400)
          .send({ error: "Token expirado. Tente novamente" });
      }

      user.password = password;

      await user.save();

      res.status(200).send("Senha alterada com sucesso.");
    } catch (error) {
      res
        .status(400)
        .send({ error: "Não foi possível alterar a senha, tente novamente." });
    }
  },

  create_skill: async function (req, res) {
    const selectedSkill = await Skill.findOne({
      where: {
        name: req.body.name,
        level: req.body.level,
        type: req.body.type,
        idUser: req.body.idUser,
      },
    });
    if (selectedSkill) {
      return res.status(400).send("Habilidade já cadastrada");
    }

    const skill = {
      name: req.body.name,
      level: req.body.level,
      type: req.body.type,
      idUser: req.body.idUser,
    };

    try {
      const savedSkill = await Skill.create(skill);
      res.status(200).send(savedSkill);
    } catch (error) {
      res.status(400).send("Erro na criação da habilidade");
    }
  },

  check_skill: async function (req, res) {
    const userId = req.params.userId;

    try {
      const skills = await Skill.findAll({ where: { idUser: userId } });
      res.status(200).send(skills);
    } catch (error) {
      res.status(400).send("Erro na busca de habilidades");
    }
  },

  update_skill: async function (req, res) {
    const skillId = req.params.skillId;

    const newSkill = req.body;

    try {
      await Skill.update(newSkill, { where: { id: skillId } });
      res.status(200).send(newSkill);
    } catch (error) {
      console.log(error);
      res.status(400).send("Erro na atualização da habilidade");
    }
  },

  delete_skill: async function (req, res) {
    const skillId = req.params.skillId;

    try {
      const deleteSkill = await Skill.destroy({ where: { id: skillId } });
      res.status(200).send("Deletado com sucesso");
    } catch (error) {
      res.status(400).send(error);
    }
  },

  user_info: async function (req, res) {
    const userId = req.params.userId;

    try {
      const userInfo = await User.findByPk(userId);
      res.status(200).send([userInfo]);
    } catch (error) {
      res.status(400).send("Erro na busca de usuário");
    }
  },

  all_users: async function (req, res) {
    try {
      const users = await User.findAll();
      res.status(200).send(users);
    } catch (error) {
      res.status(400).send("Erro na busca de usuários");
    }
  },

  check_skills_byUser: async function (req, res) {
    const userId = req.params.userId;

    try {
      const skills = await Skill.findAll({ where: { idUser: userId } });
      res.status(200).send(skills);
    } catch (error) {
      res.status(400).send("Erro na busca de habilidades");
    }
  },

  all_skills: async function (req, res) {
    try {
      const allNewSkills = await AllSkills.findAll();
      res.status(200).send(allNewSkills);
    } catch (error) {
      res.status(400).send("Erro na busca de habilidades");
    }
  },

  add_project: async function (req, res) {
    const userId = req.body.id;

    const selectedProject = await Project.findOne({
      where: {
        name: req.body.name,
      },
    });

    if (!selectedProject) {
      return res.status(400).send("Projeto não existe");
    }

    try {
      const selectedUser = await User.findByPk(userId);

      await selectedUser.addProjects(selectedProject);
      res.status(200).send("Projeto adicionado!");
    } catch (error) {
      console.log(error);
      res.status(400).send("Erro em adicionar projeto");
    }
  },

  all_projects: async function (req, res) {
    try {
      const allProjects = await Project.findAll();
      res.status(200).send(allProjects);
    } catch (error) {
      res.status(400).send("Erro na busca de projetos");
    }
  },

  check_project: async function (req, res) {
    const userId = req.params.userId;
    console.log(userId);

    try {
      const userProject = await User.findAll({
        where: { id: userId },
        include: [
          {
            model: Project,
            through: {
              attributes: [],
            },
          },
        ],
      });
      res.status(200).send(userProject);
    } catch (error) {
      res.status(400).send("Erro na busca de projetos");
    }
  },

  remove_project: async function (req, res) {
    const userId = req.params.userId;
    const ProjectId = req.params.projectId;

    try {
      const removeProject = await UserProject.destroy({
        where: { ProjectId: ProjectId, UserId: userId },
      });
      res.status(200).send("Projeto removido com sucesso");
    } catch (error) {
      res.status(400).send(error);
    }
  },
};

module.exports = userController;
