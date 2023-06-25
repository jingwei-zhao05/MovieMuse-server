const knex = require("knex")(require("../knexfile"));

const validateFavMovie = (req, res, next) => {
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

  // Validate movie id exists or not in favourite movies
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

const validateWatchlist = (req, res, next) => {
  if (
    !req.body.user_id ||
    !req.body.movie_id ||
    !req.body.title ||
    !req.body.release_date ||
    !req.body.poster_path
  ) {
    return res.status(400).json({
      message:
        "Requires user id, movie id, title, release date and poster path fields",
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

  // Validate movie id exists or not in watchlist
  knex("usersWatchlist")
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
  validateFavMovie,
  validateWatchlist,
};
