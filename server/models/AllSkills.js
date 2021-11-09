module.exports = (sequelize, DataTypes) => {
    const AllSkills = sequelize.define("AllSkills", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category: {
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
  
    return AllSkills;
  };
  