const Caminte = require('caminte');
const config = require('./../config');
const schema = new Caminte.Schema('mongodb', config);
const Pet = require('./Pet');

const User = schema.define('User', {
  name: {
    type: schema.String,
    required: true
  }
});

User.hasMany(Pet, {as: 'pets', foreignKey: '_id'});

module.exports = User;
