const { User } = require("../models/");
const { Skill } = require("../models/");
const { AllSkills } = require("../models/");
const { Project } = require("../models/");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { loginValidate } = require("./validate");

const adminController = {
  login: async function (req, res) {
    const { error } = loginValidate(req.body);
    if (error) return res.status(400).send(error.message);

    const selectedUser = await User.findOne({
      where: { email: req.body.email, admin: 1 },
      //   também verificar se o usuario é admin no banco
    });
    if (!selectedUser) {
      return res.status(400).send("Acesso Negado");
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
    const adminID = selectedUser.admin;

    const userData = {
      auth_token: token,
      user_id: userID,
      admin: adminID
    };
    res.header("authorization-token", token);
    res.header("user-ID", userID);
    res.status(200).send(userData);
  },

  check_users: async function (req, res) {
    try {
      const users = await User.findAll();
      res.status(200).send(users);
    } catch (error) {
      res.status(400).send("Erro na busca de usuários");
    }
  },

  update_user: async function (req, res) {
    const userId = req.params.userId;

    const newUser = {
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password),
    };

    try {
      await User.update(newUser, { where: { id: userId } });
      res.status(200).send(newUser);
    } catch (error) {
      console.log(error);
      res.status(400).send("Erro na atualização de usuário");
    }
  },

  delete_user: async function (req, res) {
    const userId = req.params.userId;

    try {
      const deletedUser = await User.destroy({ where: { id: userId } });
      res.status(200).send("Deletado com sucesso");
    } catch (error) {
      res.status(400).send(error);
    }
  },

  check_skills: async function (req, res) {
    try {
      const skills = await Skill.findAll();
      res.status(200).send(skills);
    } catch (error) {
      res.status(400).send("Erro na busca de habilidades");
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
      res.status(200).send("Habilidade deletada com sucesso");
    } catch (error) {
      res.status(400).send(error);
    }
  },

  create_new_skill: async function (req, res) {
    const chosenSkill = await AllSkills.findOne({
      where: {
        name: req.body.name,
        category: req.body.category,
      },
    });
    if (chosenSkill) {
      return res.status(400).send("Habilidade já cadastrada");
    }

    const newSkill = {
      name: req.body.name,
      category: req.body.category,
    };

    try {
      console.log(newSkill);
      const savedSkill = await AllSkills.create(newSkill);
      res.status(200).send(savedSkill);
    } catch (error) {
      res.status(400).send("Erro na criação da habilidade");
    }
  },

  update_new_skill: async function (req, res) {
    const skillId = req.params.skillId;

    const newSkill = req.body;

    try {
      await AllSkills.update(newSkill, { where: { id: skillId } });
      res.status(200).send(newSkill);
    } catch (error) {
      console.log(error);
      res.status(400).send("Erro na atualização da habilidade");
    }
  },

  delete_new_skill: async function (req, res) {
    const newSkillId = req.params.newSkillId;

    try {
      const deleteNewSkill = await AllSkills.destroy({ where: { id: newSkillId } });
      res.status(200).send("Deletado com sucesso");
    } catch (error) {
      res.status(400).send(error);
    }
  },

  all_new_skills: async function (req, res) {
    try {
      const allNewSkills = await AllSkills.findAll();
      res.status(200).send(allNewSkills);
    } catch (error) {
      res.status(400).send("Erro na busca de habilidades");
    }
  },

  create_project: async function (req, res) {
    const chosenProject = await Project.findOne({
      where: {
        name: req.body.name,
      },
    });
    if (chosenProject) {
      return res.status(400).send("Projeto já cadastrado");
    }

    const newProject = {
      name: req.body.name,
      manager: req.body.manager,
      startDate: req.body.startDate,
      conclusionDate: req.body.conclusionDate,
      skill1: req.body.skill1,
      skill2: req.body.skill2,
      skill3: req.body.skill3,
      skill4: req.body.skill4,
      skill5: req.body.skill5,
      skill6: req.body.skill6,
      skill7: req.body.skill7,
      skill8: req.body.skill8,
    };

    try {
      console.log(newProject);
      const savedProject = await Project.create(newProject);
      res.status(200).send(savedProject);
    } catch (error) {
      res.status(400).send("Erro na criação do projeto");
    }
  },

  check_project: async function (req, res) {
    try {
      const projects = await Project.findAll();
      res.status(200).send(projects);
    } catch (error) {
      res.status(400).send("Erro na busca dos projetos");
    }
  },

  update_project: async function (req, res) {
    const projectId = req.params.projectId;

    const newProject = req.body;

    try {
      await Project.update(newProject, { where: { id: projectId } });
      res.status(200).send(newProject);
    } catch (error) {
      console.log(error);
      res.status(400).send("Erro na atualização do projeto");
    }
  },

  delete_project: async function (req, res) {
    const projectId = req.params.projectId;

    try {
      const deleteProject = await Project.destroy({ where: { id: projectId } });
      res.status(200).send("Projeto deletado com sucesso");
    } catch (error) {
      res.status(400).send(error);
    }
  },

};

module.exports = adminController;
