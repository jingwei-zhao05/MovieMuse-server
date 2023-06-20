const knex = require("knex")(require("../knexfile"));

const validateMovie = (req, res, next) => {
  if (
    !req.body.user_id ||
    !req.body.movie_id ||
    !req.body.title ||
    !req.body.imgSrc
  ) {
    return res.status(400).json({
      message:
        "Requires user id, movie id, movie title and movie image path fields",
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

      next();
    });
};

module.exports = {
  validateMovie,
};
