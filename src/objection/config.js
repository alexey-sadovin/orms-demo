module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'test',
      password: 'password',
      database: 'test-objection'
    },
    migrations: {
      tableName: 'objection_migrations'
    }
  }
};
