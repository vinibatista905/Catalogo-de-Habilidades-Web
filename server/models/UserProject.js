module.exports = (sequelize, DataTypes) => {
  const UserProject = sequelize.define("UserProject", {
    userProjectId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ProjectId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return UserProject;
};
