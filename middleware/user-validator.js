const knex = require("knex")(require("../knexfile"));

const validateUser = (req, res, next) => {
  if (!req.body.user_name || !req.body.email) {
    return res.status(400).json({
      message: "User requires name and email fields",
    });
  }

  //Validate password length
  if (req.body.password.length < 8) {
    return res.status(400).json({
      message: "User password field need at least 8 characters",
    });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(req.body.email)) {
    return res.status(400).json({
      message: "Invalid email format",
    });
  }

  // Validate unique email
  knex("users")
    .where({ email: req.body.email })
    .then((users) => {
      if (users.length !== 0) {
        return res.status(400).json({
          message: "Email already exists.",
        });
      }

      next();
    });
};

module.exports = {
  validateUser,
};
