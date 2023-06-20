const knex = require("knex")(require("../knexfile"));
const jwt = require("jsonwebtoken");

const getMovies = (_req, res) => {
  knex("movies")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving Movies: ${err}`));
};

// const getMoviesByUser = (_req, res) => {
//   knex
//     .from("movies")
//     .select(
//       "movies.id",
//       "movies.item_name",
//       "movies.category",
//       "movies.status",
//       "movies.quantity",
//       "warehouse_name"
//     )
//     .join("warehouses", "inventories.warehouse_id", "warehouses.id")
//     .then((joined) => {
//       res.status(200).json(joined);
//     })
//     .catch((error) => {
//       res.status(500).json({
//         message: `Unable to retrieve inventory data. Error: ${error}`,
//       });
//     });
// };

const postMovies = (req, res) => {
  knex("movies")
    .insert({
      user_id: req.body.user_id,
      movie_id: req.body.movie_id,
      title: req.body.title,
      imgSrc: req.body.imgSrc,
    })
    .then((result) => {
      return knex("movies")
        .where({ id: result[0] })
        .then((createdMovie) => res.status(201).json(createdMovie));
    })
    .catch(() => {
      res.status(500).json({
        message: "Unable to create new movie",
      });
    });
};

module.exports = {
  getMovies,
  postMovies,
};
