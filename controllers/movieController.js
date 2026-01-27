const Movie = require("../models/Movie");

exports.getMovies = async (req, res) => {
  const movies = await Movie.find();
  res.json(movies);
};

exports.searchMovies = async (req, res) => {
  const { q } = req.query;
  const movies = await Movie.find({
    $or: [
      { Series_Title: { $regex: q, $options: "i" } },
      { Overview: { $regex: q, $options: "i" } }
    ]
  });
  res.json(movies);
};

exports.sortedMovies = async (req, res) => {
  const { sortBy } = req.query;
  const movies = await Movie.find().sort({ [sortBy]: 1 });
  res.json(movies);
};

exports.addMovie = async (req, res) => {
  try {
    const movie = await Movie.create(req.body);
    res.status(201).json(movie);
  } catch (error) {
    console.error("ADD MOVIE ERROR:", error.message);
    res.status(400).json({ message: error.message });
  }
};

exports.updateMovie = async (req, res) => {
  const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(movie);
};

exports.deleteMovie = async (req, res) => {
  await Movie.findByIdAndDelete(req.params.id);
  res.json({ message: "Movie deleted" });
};

exports.movieInfo = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);

    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    res.json(movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
