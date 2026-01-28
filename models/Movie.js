const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    Series_Title: { 
      type: String, 
      required: true, 
      trim: true, 
      default: "Untitled Movie" 
    },

    IMDB_Rating: { 
      type: Number, 
      min: 0, 
      max: 10, 
      default: 0 
    },

    Released_Year: { 
      type: String, 
      default: "N/A" 
    },

    Runtime: { 
      type: String, 
      default: "N/A" 
    },

    Poster_Link: { 
      type: String, 
      default: "https://via.placeholder.com/300x450?text=No+Image" 
    },

    Genre: { 
      type: String, 
      default: "Unknown" 
    },

    Certificate: { 
      type: String, 
      default: "Not Rated" 
    },

    Director: { 
      type: String, 
      default: "Unknown" 
    },

    Gross: { 
      type: String, 
      default: "N/A" 
    },

    Meta_score: { 
      type: Number, 
      min: 0, 
      max: 100, 
      default: null 
    },

    No_of_Votes: { 
      type: Number, 
      default: 0 
    },

    Overview: { 
      type: String, 
      default: "Overview not available." 
    },

    Star1: { 
      type: String, 
      default: "" 
    },
    Star2: { 
      type: String, 
      default: "" 
    },
    Star3: { 
      type: String, 
      default: "" 
    },
    Star4: { 
      type: String, 
      default: "" 
    }
  },
  { 
    timestamps: true // adds createdAt and updatedAt automatically
  }
);

module.exports = mongoose.model("Movie", movieSchema);
