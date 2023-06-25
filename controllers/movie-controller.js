const knex = require("knex")(require("../knexfile"));
const jwt = require("jsonwebtoken");

const getMovies = (_req, res) => {
  knex("movies")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving Movies: ${err}`));
};

const postMovies = (req, res) => {
  knex("usersFavouriteMovies")
    .insert({
      user_id: req.body.user_id,
      movie_id: req.body.movie_id,
    })
    .then((result) => {
      return knex("usersFavouriteMovies")
        .where({ id: result[0] })
        .then((createdMovie) => res.status(201).json(createdMovie));
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: "Unable to create new movie",
      });
    });
};

module.exports = {
  getMovies,
  postMovies,
};
