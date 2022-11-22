/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("userTable", (table)=>{
    table.increments("id").primary();
    table.string("userName");
    table.string("pass");
    table.boolean("0");
    table.boolean("1");
    table.boolean("2");
    table.boolean("3");
    table.boolean("4");
    table.boolean("5");
    table.boolean("6");
    table.boolean("7");
    table.boolean("8");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("userTable");
};
