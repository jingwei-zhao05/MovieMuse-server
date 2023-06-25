const router = require("express").Router();
const movieController = require("../controllers/movie-controller");
const {
  validateFavMovie,
  validateWatchlist,
} = require("../middleware/movie-validator");

router
  .route("/")
  .get(movieController.getMovies)
  .post(validateFavMovie, movieController.postFavMovies);

router.route("/:id/:movieId").delete(movieController.deleteFavMovies);

router
  .route("/watchlist")
  .post(validateWatchlist, movieController.postWatchlist);

router.route("/:id/watchlist").get(movieController.getWatchlist);

router.route("/:id/watchlist/:movieId").delete(movieController.deleteWatchlist);

module.exports = router;
