module.exports = {
  type: 'mongodb',
  host: 'localhost',
  database: 'test-typeorm',
  synchronize: true,
  logging: true,
  entities: [
    require('./entity/User.js'),
    require('./entity/Pet.js')
  ]
};
