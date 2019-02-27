const knex = require('knex');
const {development: config} = require('./config');

const USER_TABLE = 'users';
const PET_TABLE = 'pets';

(async () => {
  const orm = knex(config);

  try {
    await run(orm);

    console.log('\nfinished');
    process.exit(0);
  } catch (err) {
    console.error('\nSomething went wrong', err);
    process.exit(1);
  }
})();

async function run(orm) {
  // api: https://knexjs.org/#Builder-wheres

  await orm(USER_TABLE).del();
  await orm(PET_TABLE).del();

  console.log('\nget users list', await orm
    .select('*')
    .from('users')
  );

  const userId = await orm(USER_TABLE).insert([{name: 'John Doe'}]);
  await orm(PET_TABLE).insert([
    {userId, name: 'Darth Vader', breed: 'chihuahua'},
    {userId, name: 'Joseph Stalin', breed: 'sheep-dog'}
  ]);

  console.log('\nget users list', await orm
    .select('*')
    .from('users')
  );

  console.log('\nget pets list', await orm
    .select('*')
    .from('pets')
  );
}
