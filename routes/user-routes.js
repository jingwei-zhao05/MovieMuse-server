const router = require("express").Router();
const userController = require("../controllers/user-controller");
const { validateUser } = require("../middleware/user-validator");
const { authorize } = require("../middleware/authorize");

router
  .route("/")
  .get(userController.getUsers)
  .post(validateUser, userController.createUser);

router.route("/login").post(userController.login);

router.route("/select-movies").get(authorize, userController.selectMovies);

module.exports = router;
