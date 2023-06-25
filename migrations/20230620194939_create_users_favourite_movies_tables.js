/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("usersFavouriteMovies", function (table) {
    table.increments("id").primary();
    table.integer("user_id").unsigned().notNullable();
    // table.integer("movieId").unsigned().notNullable();
    table.integer("movie_id").notNullable();
    table.foreign("user_id").references("id").inTable("users");
    // table.foreign("movieId").references("id").inTable("movies");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table
      .timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("usersFavouriteMovies");
};
