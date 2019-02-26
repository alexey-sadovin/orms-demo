const {EntitySchema} = require('typeorm');
const User = require('./../model/User');

module.exports = new EntitySchema({
  name: 'User',
  target: User,
  columns: {
    id: {
      primary: true,
      type: 'string',
      generated: true
    },
    name: {
      type: 'string'
    }
  },
  relations: {
    pets: {
      target: 'Pet',
      type: 'one-to-many',
      joinTable: true,
      cascade: true
    }
  }
});
