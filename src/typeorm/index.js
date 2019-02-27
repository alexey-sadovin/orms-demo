const TypeOrmConnection = require('./TypeOrmConnection');
const User = require('./model/User');
const Pet = require('./model/Pet');
const config = require('./config');

(async () => {
  const orm = new TypeOrmConnection(config);

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
  // repository api: https://github.com/typeorm/typeorm/blob/master/docs/repository-api.md

  const userRepository = await orm.getRepository(User);
  const petRepository = await orm.getRepository(Pet);

  await Promise.all([
    userRepository.delete(),
    petRepository.delete()
  ]);

  const firstPet = await petRepository.save(
    petRepository.create({name: 'Darth Vader', breed: 'chihuahua'}));

  const secondPet = await petRepository.save(
    petRepository.create({name: 'Joseph Stalin', breed: 'sheep-dog'}));

  await petRepository.save(userRepository.create({
    name: 'John Doe',
    pets: [firstPet, secondPet]
  }));

  console.log('\nget users', await userRepository.find());
}
