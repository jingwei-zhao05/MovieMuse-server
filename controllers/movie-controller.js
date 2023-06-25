const knex = require("knex")(require("../knexfile"));
const jwt = require("jsonwebtoken");

const getMovies = (_req, res) => {
  knex("movies")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving Movies: ${err}`));
};

const postFavMovies = (req, res) => {
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

const deleteFavMovies = (req, res) => {
  knex("usersFavouriteMovies")
    .where({ movie_id: req.params.movieId, user_id: req.params.id })
    .del()
    .then((result) => {
      if (result === 0) {
        return res.status(400).json({
          message: `User with ID: ${req.params.id} not found or movie with ID: ${req.params.movieId} to be deleted not found.`,
        });
      }

      // no content response
      res.status(204).send();
    })
    .catch(() => {
      res.status(500).json({ message: "Unable to delete movie" });
    });
};

const getWatchlist = (req, res) => {
  knex("usersWatchlist")
    .where({ user_id: req.params.id })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving Movies: ${err}`));
};

const postWatchlist = (req, res) => {
  knex("usersWatchlist")
    .insert({
      user_id: req.body.user_id,
      movie_id: req.body.movie_id,
      title: req.body.title,
      release_date: req.body.release_date,
      poster_path: req.body.poster_path,
    })
    .then((result) => {
      return knex("usersWatchlist")
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

const deleteWatchlist = (req, res) => {
  knex("usersWatchlist")
    .where({ movie_id: req.params.movieId, user_id: req.params.id })
    .del()
    .then((result) => {
      if (result === 0) {
        return res.status(400).json({
          message: `User with ID: ${req.params.id} not found or movie with ID: ${req.params.movieId} to be deleted not found.`,
        });
      }

      // no content response
      res.status(204).send();
    })
    .catch(() => {
      res.status(500).json({ message: "Unable to delete movie" });
    });
};

module.exports = {
  getMovies,
  postFavMovies,
  getWatchlist,
  postWatchlist,
  deleteFavMovies,
  deleteWatchlist,
};
