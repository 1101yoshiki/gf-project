/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.
  alterTable("userTable",(table) => {
    table.boolean("ohtani")
    table.boolean("starbucks")
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
    .alterTable("useTable",(table) =>{
        table.dropColumn("ohtani");
        table.dropColumn("starbucks");
    });
};
