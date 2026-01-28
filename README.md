
---

# 📘 Backend README (`backend/README.md`)

```md
# 🎬 IMDB Clone – Backend

This is the **backend REST API** for the IMDB Clone application, built using **Node.js, Express, and MongoDB**.  
It handles authentication, movie management, and database operations.

🔗 **Live API**: https://your-railway-domain.up.railway.app

---

## 🚀 Features

- RESTful API architecture
- JWT-based authentication
- MongoDB Atlas integration
- Deployed on Railway

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB & Mongoose
- JWT (Authentication)
- CORS
- dotenv

---

## 📁 Project Structure

backend/
│
├── config/
│ └── db.js
├── routes/
│ ├── authRoutes.js
│ └── movieRoutes.js
├── models/
│ └── Movie.js
├── middleware/
├── server.js
├── package.json
└── .env.example


---

## Environment Variables

```env
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret
NODE_ENV=production



▶️ Running Locally
cd backend
npm install
npm run dev


Server runs on:

http://localhost:5000

## API Documentation
🔎 Base URL
https://your-railway-domain.up.railway.app

## Authentication APIs
Register User
POST /auth/register


Body:

{
  "name": "User Name",
  "email": "user@email.com",
  "password": "password"
}

Login User
POST /auth/login


Body:

{
  "email": "user@email.com",
  "password": "password"
}


Response:

{
  "token": "jwt_token_here"
}

## Movie APIs
Get All Movies
GET /movies

Add Movie
POST /movies


Headers:

Authorization: Bearer <JWT_TOKEN>


Body:

{
  "Series_Title": "Movie Name",
  "IMDB_Rating": 8.5,
  "Released_Year": "2024",
  "Runtime": "120 min",
  "Poster_Link": "https://...",
  "Overview": "...",
  "Genre": "Action, Drama",
  "Certificate": "UA",
  "Director": "Director Name",
  "Star1": "Actor One",
  "Star2": "Actor Two",
  "Star3": "Actor Three",
  "Star4": "Actor Four",
  "No_of_Votes": 123456,
  "Gross": "100,000,000",
  "Meta_score": 75
}

Update Movie
PUT /movies/:id

Delete Movie
DELETE /movies/:id

## Health Check
GET /


Response:

Backend is running 🚀

☁️ Deployment Details
Backend (Railway)

Uses process.env.PORT

Web service with Generate Domain

MongoDB Atlas connected via env vars

Container listens on 0.0.0.0

Frontend (Netlify)

Build command:

npm run build


Publish directory:

dist


Env variable:

VITE_API_URL

## Security Best Practices

JWT secrets stored securely

MongoDB credentials hidden

.env files ignored via .gitignore

CORS restricted to frontend domain

## Future Enhancements

Pagination & search

Role-based access (admin/user)

Rate limiting

API documentation using Swagger

UI improvements

 Author

Vishal Jaware
Full-Stack MERN Developer


