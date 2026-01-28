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

connectDB();

const app = express();

app.use(cors({
  origin: "https://imdbfront-end.netlify.app",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

/* 🔎 TEMP: Health check */
app.get("/", (req, res) => {
  res.status(200).send("Backend is running 🚀");
});

/* 🔎 TEMP: Request logger */
app.use((req, res, next) => {
  console.log("➡️", req.method, req.url);
  next();
});

/* ROUTES */
app.use("/auth", require("./routes/authRoutes"));
app.use("/movies", require("./routes/movieRoutes"));

/* PORT */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);


