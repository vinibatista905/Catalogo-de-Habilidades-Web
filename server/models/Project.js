
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
      mainSkill: {
        type: DataTypes.STRING,
        select: false,
      },
    });
  
    Project.associate = (models) => {
        Project.belongsToMany(models.User, { through: 'userproject' })
        
      }
   
    return Project;
  };
  