const {EntitySchema} = require('typeorm');
const Pet = require('./../model/Pet');

module.exports = new EntitySchema({
  name: 'Pet',
  target: Pet,
  columns: {
    id: {
      type: 'string',
      primary: true,
      generated: true
    },
    name: {
      type: 'string'
    },
    breed: {
      type: 'string'
    }
  }
});
