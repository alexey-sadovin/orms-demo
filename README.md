# orms-demo

Before testing:
1. install MongoDb & MySQL
2. `npm i`
3. configure credentials in `src/*/config.js`

How to check the basic capabilities of ORM:

1. with SQL-like dbs & MongoDb

* [Waterline](https://github.com/balderdashy/waterline): `npm run waterline`
* [TypeORM](https://github.com/typeorm/typeorm): `npm run typeorm`
* [Caminte](https://github.com/biggora/caminte):`npm run typeorm`

2. only with SQL-like dbs:

* [Sequelize](https://github.com/sequelize/sequelize):

  * `npm run sequelize-migration`
  * `npm run sequelize`

* [Knex](https://github.com/tgriesser/knex):

  * `npm run knex-migration`
  * `npm run knex`

* [Objection.js](https://github.com/Vincit/objection.js) (based on Knex):

  * `npm run objection-migration`
  * `npm run objection`
