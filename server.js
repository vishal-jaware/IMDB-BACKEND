require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

connectDB();

const app = express();

/* ✅ CORS CONFIG */
// app.use(cors({
//   origin: [
//     "http://localhost:5173",
//     "https://imdbfront-end.netlify.app"
//   ],
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   allowedHeaders: ["Content-Type", "Authorization"]
// }));

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://imdbfront-end.netlify.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));



app.use(express.json());

/* ROUTES */
app.use("/auth", require("./routes/authRoutes"));
app.use("/movies", require("./routes/movieRoutes"));

/* ✅ RAILWAY PORT FIX */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);

