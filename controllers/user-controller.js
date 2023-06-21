const knex = require("knex")(require("../knexfile"));
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const getUsers = (_req, res) => {
  knex("users")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving Users: ${err}`));
};

const createUser = (req, res) => {
  knex("users")
    .insert({
      user_name: req.body.user_name,
      email: req.body.email,
      password: req.body.password,
    })
    .then((result) => {
      return knex("users").where({ id: result[0] });
    })
    .then((createdUser) => {
      res.status(201).json(createdUser);
    })
    .catch((error) => {
      res.status(500).json({
        message: `Unable to create user. Error: ${error}`,
      });
    });
};

const getUserFavouriteMovies = (req, res) => {
  knex("usersFavouriteMovies")
    .join("users", "users.id", "usersFavouriteMovies.userId")
    .join("movies", "movies.id", " usersFavouriteMovies.movieId")
    .select("*")
    .where({ userId: req.params.id })
    .then((joined) => {
      if (joined.length === 0) {
        return res.status(404).json({
          message: `User with ID: ${req.params.id} not found`,
        });
      }
      res.status(200).json(joined);
    })
    .catch((err) => {
      res.status(500).json({
        message: `Unable to retrieve data. Error: ${err}`,
      });
    });
};

const login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "Login requires email and password",
    });
  }

  // if match => send the token (jwt.sign ({ id }))
  knex("users")
    .where({ email: email })
    .then((users) => {
      if (users.length === 0) {
        return res.status(401).json({
          message: "Invalid credentials",
        });
      }

      const user = users[0];

      // const validPassword = bcrypt.compareSync(password, user.password);
      const validPassword = password === user.password;
      if (!validPassword) {
        return res.status(401).json({
          message: "Invalid credentials",
        });
      }

      const token = jwt.sign(
        { userName: user.user_name, userId: user.id },
        process.env.SECRET_KEY,
        {
          expiresIn: 60 * 60 * 24,
        }
      );

      res.json({ token });
    });
};

const selectMovies = (req, res) => {
  res.json(req.decoded);
};

module.exports = {
  getUsers,
  createUser,
  login,
  selectMovies,
  getUserFavouriteMovies,
};
