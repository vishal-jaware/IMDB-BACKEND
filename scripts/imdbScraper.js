const axios = require("axios");
const cheerio = require("cheerio");
const { addToQueue } = require("../queue/movieQueue");

const IMDB_URL = "https://www.imdb.com/chart/top";

const scrapeIMDB = async () => {
  try {
    const { data } = await axios.get(IMDB_URL, {
      headers: {
        "User-Agent": "Mozilla/5.0"
      }
    });

    const $ = cheerio.load(data);

    $(".ipc-metadata-list-summary-item").each((i, el) => {
      if (i >= 20) return; // limit to 20 movies (important!)

      const title = $(el).find("h3").text().replace(/\d+\.\s/, "");
      const rating = $(el).find(".ipc-rating-star").text().split(" ")[0];

      const movie = {
        title,
        rating: Number(rating),
        duration: 120,
        description: "Imported from IMDb Top 250",
        releaseDate: new Date("2000-01-01")
      };

      addToQueue(movie);
    });

    console.log("IMDb movies added to queue");
  } catch (err) {
    console.error("Scraping failed", err.message);
  }
};

scrapeIMDB();
