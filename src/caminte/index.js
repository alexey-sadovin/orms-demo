const async = require('async');
const User = require('./model/User');
const Pet = require('./model/Pet');

run(err => {
  if (err) {
    console.error('\nSomething went wrong', err);
    return process.exit(1);
  }

  console.log('\nfinished');
  process.exit(0);
});

function run(cb) {
  const pets = [];

  async.waterfall([
    next => User.destroyAll(next),
    next => Pet.destroyAll(next),
    next => User.find(next),
    (users, next) => {
      console.log('\nget users list', users);
      console.log('\nInsert user & pets...');

      return new Pet({
        name: 'Darth Vader',
        breed: 'chihuahua'
      }).save(next);
    },
    (pet, next) => {
      pets.push(pet.id);

      return new Pet({
        name: 'Darth Vader',
        breed: 'chihuahua'
      }).save(next);
    },
    (pet, next) => {
      pets.push(pet.id);

      return new User({
        name: 'John Doe',
        pets
      }).save(next);
    },
    (user, next) => User.find(next),
    (users, next) => {
      console.log('\nget users list', users);
      next();
    }
  ], cb);
}
