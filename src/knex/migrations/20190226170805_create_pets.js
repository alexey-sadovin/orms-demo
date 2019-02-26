module.exports.up = function(knex) {
  return knex.schema.createTable('pets', function(table) {
    table
      .increments('id')
      .unsigned()
      .primary();

    table
      .integer('userId')
      .unsigned()
      .notNull();

    table
      .string('name')
      .notNull();

    table
      .enum('breed', ['chihuahua', 'sheep-dog', 'unknown'])
      .notNull();
  });
};

module.exports.down = function(knex) {
  return knex.schema.dropTableIfExists('pets');
};
