module.exports = (sequelize, DataTypes) => {
    const Profile = sequelize.define("Profile", {
      role: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      team: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      startDate: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      profileImage: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      idUser: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  
    return Profile;
  };
  