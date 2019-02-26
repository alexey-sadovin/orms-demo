module.exports.up = function(knex) {
  return knex.schema.createTable('users', function(table) {
    table
      .increments('id')
      .unsigned()
      .primary();

    table
      .string('name')
      .notNull();
  });
};

module.exports.down = function(knex) {
  return knex.schema.dropTableIfExists('products');
};
