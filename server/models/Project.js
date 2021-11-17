module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define("Project", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    manager: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    startDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    conclusionDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    skill1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    skill2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    skill3: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    skill4: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    skill5: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    skill6: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    skill7: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    skill8: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  Project.associate = (models) => {
    Project.belongsToMany(models.User, { through: models.UserProject });
  };


  return Project;
};
