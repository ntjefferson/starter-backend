/* eslint-disable func-names */
// eslint-disable-next-line no-unused-vars
exports.up = function (knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.text('id').primary().notNullable();
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('users');
};
