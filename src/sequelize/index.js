const SequelizeConnection = require('./SequelizeConnection');
const {db, user, password, opts} = require('./config');

(async () => {
  const orm = new SequelizeConnection(db, user, password, opts);

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
  await orm.init();

  const User = orm.getUserModel();
  const Pet = orm.getPetModel();

  await Promise.all([
    User.destroy({where: {}}),
    Pet.destroy({where: {}})
  ]);

  console.log(
    '\nget users list with pets', await User.findAll({where: {}}));

  const user = await User.create({name: 'John Doe'});

  await Pet.bulkCreate([
    {userId: user.id, name: 'Darth Vader', breed: 'chihuahua'},
    {userId: user.id, name: 'Joseph Stalin', breed: 'sheep-dog'}
  ]);

  const it = await User.findOne({where: {}});
  console.log(
    '\nget user with pets', await it.getPets());
}
