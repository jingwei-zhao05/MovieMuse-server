exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("usersFavouriteMovies").del();
  //   await knex("usersFavouriteMovies").insert([]);
};
