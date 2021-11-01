module.exports = (sequelize, DataTypes) => {
  const UserSkill = sequelize.define("UserSkill", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    
  });

  return UserSkill;
};
