const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const controller = require("../controllers/movieController");

router.get("/", controller.getMovies);
router.get("/search", controller.searchMovies);
router.get("/sorted", controller.sortedMovies);
router.get("/:id", controller.movieInfo)

router.post("/", auth, admin, controller.addMovie);
router.put("/:id", auth, admin, controller.updateMovie);
router.delete("/:id", auth, admin, controller.deleteMovie);

module.exports = router;
