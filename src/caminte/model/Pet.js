const Caminte = require('caminte');
const config = require('./../config');
const schema = new Caminte.Schema('mongodb', config);

const PET_BREEDS = Object.freeze([
  'chihuahua',
  'sheep-dog',
  'unknown'
]);

const Pet = schema.define('Pet', {
  name: {
    type: schema.String,
    required: true
  },
  breed: {
    type: schema.String,
    defaults: 'unknown'
  }
});

Pet.validatesInclusionOf('breed', {in: PET_BREEDS});

module.exports = Pet;
