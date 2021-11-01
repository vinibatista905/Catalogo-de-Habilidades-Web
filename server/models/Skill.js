module.exports = (sequelize, DataTypes) => {
  const Skill = sequelize.define("Skill", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    level: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  // Skill.associate = (models) => {
  //   Skill.belongsToMany(models.User, {
  //     through: {
  //       model: models.UserSkill
  //     },
  //     foreignKey: 'idSkill',
  //     constraint: true
  //   })
  // }

  return Skill;
};
