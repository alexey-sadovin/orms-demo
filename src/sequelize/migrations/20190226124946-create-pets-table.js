module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('pets', {
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
    }, {
      charset: 'utf8'
    });
  },

  down(queryInterface) {
    return queryInterface.dropTable('pets');
  }
};
