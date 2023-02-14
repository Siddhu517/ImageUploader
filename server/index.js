import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Routes from "./Routes/routes";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: process.env.CLIENT_URL }));

//database
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log("DB Connection error"));

//routes
app.use("/api", Routes);

const port = process.env.PORT || 8001;
app.listen(port, () => console.log(`Server listening on port:${port}`));
