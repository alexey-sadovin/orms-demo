module.exports = {
  db: 'test-sequelize',
  user: 'test',
  password: 'password',
  opts: {
    dialect: 'mysql',
    host: 'localhost',
    logging: false,
    // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
    operatorsAliases: false,

    define: {
      charset: 'utf8',
      collate: 'utf8_general_ci'
    }
  }
};
