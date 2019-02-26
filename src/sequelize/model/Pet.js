const Sequelize = require('sequelize');

const petSchema = {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  breed: {
    type: Sequelize.ENUM,
    values: ['chihuahua', 'sheep-dog', 'unknown'],
    allowNull: false,
    defaults: 'unknown'
  }
};

module.exports = connection => connection.define('pets', petSchema, {timestamps: false});
