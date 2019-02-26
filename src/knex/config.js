module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'test',
      password: 'password',
      database: 'test-knex'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
