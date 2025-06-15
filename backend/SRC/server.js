import express from "express"; // added type module in json file
import cors from "cors"; // Cross-Origin Resource Sharing
// allows your frontend to access your backend API from a different origin
import dotenv from "dotenv";

// const express = require("express");
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve(); // Get the current directory name

//middlewares
if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:5173", // replace with your frontend URL
    })
  );
}
app.use(express.json()); //this middle ware will parse the request body as json
app.use(rateLimiter);
// app.use(
//   cors({
//     origin: "http://localhost:5173", // replace with your frontend URL
//   })
// ); //this middleware will allow cross-origin requests, so that our frontend can access the backend API
//our simple custom middleware

// app.use((req, res, next) => {
//   console.log(`Req method is ${req.method} & Req url is ${req.url}`);
//   next();
// });

app.use("/api/notes", notesRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist"))); // Serve static files from the public directory
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  }); // Serve index.html for all other routes
}

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("server is running on PORT 5001");
  });
});

// what is an end-point?
//An end-point is a combination of a URL +HTTP method that lets the client interact with a specific resource
