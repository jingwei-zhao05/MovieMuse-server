const router = require("express").Router();
const userController = require("../controllers/user-controller");
const { validateUser } = require("../middleware/user-validator");

router
  .route("/")
  .get(userController.getUsers)
  .post(validateUser, userController.createUser);

module.exports = router;
