const Sequelize = require('sequelize');

const userSchema = {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
};

module.exports = (connection, Pet) => {
  const User = connection.define('users', userSchema, {timestamps: false});

  User.hasMany(Pet, {as: 'pets'});

  return User;
};
