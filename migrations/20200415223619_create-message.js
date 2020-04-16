
exports.up = function(knex) {
  return knex.schema.createTable('message', (table)=> {
    table.increments();
    table.text('user');
    table.text('text');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('message');
};
