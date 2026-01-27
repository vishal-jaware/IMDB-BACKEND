const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  Series_Title: { type: String, required: true },
  IMDB_Rating: Number,
  Released_Year: {type: String},
  Runtime: {type: String},
  Poster_Link: String,
  Overview: { type: String },
  Genre: { type: String },

});

module.exports = mongoose.model("Movie", movieSchema);
