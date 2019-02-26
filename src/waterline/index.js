const WaterlineConnection = require('./WaterlineConnection');
const config = require('./config');

(async () => {
  const orm = new WaterlineConnection(config);

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
  const User = await orm.getModel('user');
  const Pet = await orm.getModel('pet');

  await Promise.all([
    User.destroy({}),
    Pet.destroy({})
  ]);

  console.log(
    '\nget users list with pets', await User.find().populate('pets'));

  console.log('\nInsert user & pets...');

  const pets = await Pet
    .createEach([
      {name: 'Darth Vader', breed: 'chihuahua'},
      {name: 'Joseph Stalin', breed: 'sheep-dog'}
    ])
    .fetch();

  await User.create({
    name: 'John Doe',
    pets: pets.map(it => it.id)
  });

  console.log(
    '\nget users list with pets',
    JSON.stringify(await User.find().populate('pets'), null, 2)
  );
}
