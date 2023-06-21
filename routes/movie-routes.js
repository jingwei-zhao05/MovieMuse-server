const router = require("express").Router();
const movieController = require("../controllers/movie-controller");
const { validateMovie } = require("../middleware/movie-validator");
const { authorize } = require("../middleware/authorize");

router
  .route("/")
  .get(movieController.getMovies)
  .post(movieController.postMovies);

module.exports = router;
