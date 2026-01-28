// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const connectDB = require("./config/db");

// connectDB();

// const app = express();

// // app.use(cors({
// //   origin: [
// //     "http://localhost:5173",
// //     "https://imdbfront-end.netlify.app"
// //   ],
// //   methods: ["GET", "POST", "PUT", "DELETE"],
// //   allowedHeaders: ["Content-Type", "Authorization"]
// // }));

// app.use(cors({
//   origin: "https://imdbfront-end.netlify.app",
//   credentials: true,
//   methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//   allowedHeaders: ["Content-Type", "Authorization"]
// }));
// app.use(express.json());

// /* ROUTES */
// app.use("/auth", require("./routes/authRoutes"));
// app.use("/movies", require("./routes/movieRoutes"));

// /* ✅ RAILWAY PORT FIX */
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () =>
//   console.log(`Server running on port ${PORT}`)
// );

// *******************************************

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

// Connect to MongoDB
connectDB();

const app = express();

// Allow CORS for frontend and Railway (dynamic origin handling)
app.use(cors({
  origin: process.env.NODE_ENV === "production"
    ? "*" // or your frontend URL
    : "http://localhost:3000", 
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// JSON parsing
app.use(express.json());

// 🔎 Health check
app.get("/", (req, res) => {
  res.status(200).send("Backend is running 🚀");
});

// 🔎 Request logger
app.use((req, res, next) => {
  console.log("➡️", req.method, req.url);
  next();
});

// ROUTES
app.use("/auth", require("./routes/authRoutes"));
app.use("/movies", require("./routes/movieRoutes"));

// PORT
const PORT = process.env.PORT || 5000;

// Listen on all interfaces (important for Railway)
app.listen(PORT, "0.0.0.0", () =>
  console.log(`Server running on port ${PORT}`)
);