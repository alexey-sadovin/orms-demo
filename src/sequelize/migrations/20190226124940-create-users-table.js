module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('users', {
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
    }, {
      charset: 'utf8'
    });
  },

  down(queryInterface) {
    return queryInterface.dropTable('users');
  }
};
