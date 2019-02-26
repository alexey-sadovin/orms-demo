const Knex = require('knex');
const {Model} = require('objection');
const {development: config} = require('./config');

const User = require('./model/User');
const Pet = require('./model/Pet');

// Initialize knex
const knex = Knex(config);

// Bind all Models to a knex instance. If you only have one database in
// your server this is all you have to do. For multi database systems, see
// the Model.bindKnex method
Model.knex(knex);

(async () => {
  try {
    await run();

    console.log('\nfinished');
    process.exit(0);
  } catch (err) {
    console.error('\nSomething went wrong', err);
    process.exit(1);
  }
})();

async function run() {
  await User.query().del();
  await Pet.query().del();

  console.log('\nget users list', await User.query()
    .select('*')
    .from('users')
  );

  const user = await User.query().insert([{name: 'John Doe'}]);
  const userId = user[0].id;

  // batch insert only works with Postgresql
  await Pet.query().insert([
    {userId, name: 'Darth Vader', breed: 'chihuahua'}
  ]);
  await Pet.query().insert([
    {userId, name: 'Joseph Stalin', breed: 'sheep-dog'}
  ]);

  console.log('\nget users list', await User.query()
    .select('*')
    .from('users')
  );

  console.log('\nget pets list', await User.query()
    .select('*')
    .from('pets')
  );
}
