const knex = require("knex")(require("../knexfile"));

const validateMovie = (req, res, next) => {
  if (!req.body.user_id || !req.body.movie_id) {
    return res.status(400).json({
      message: "Requires user id, movie id fields",
    });
  }

  // Validate user id exists or not
  knex("users")
    .where({ id: req.body.user_id })
    .then((users) => {
      if (users.length === 0) {
        return res.status(400).json({
          message: "User didn't exist",
        });
      }
    });

  // Validate movie id exists or not
  knex("usersFavouriteMovies")
    .where({ movie_id: req.body.movie_id, user_id: req.body.user_id })
    .then((movies) => {
      if (movies.length !== 0) {
        return res.status(400).json({
          message: "Movie already exist",
        });
      }
      next();
    });
};

module.exports = {
  validateMovie,
};
