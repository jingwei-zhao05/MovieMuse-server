const knex = require("knex")(require("../knexfile"));

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

module.exports = {
  getUsers,
  createUser,
};
