"use strict";
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const ProductCard = require("./Models/mobiles");
const { scraperAndGetProduct } = require("./Scraper/action");
require("dotenv").config();
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connection established");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

const PORT = process.env.PORT || 3000;
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT} \nhttp://localhost:${PORT}`);
  });
}

app.get("/", (req, res) => {
  try {
    res.json({ message: "Hello World!", success: true });
  } catch (err) {
    console.error(err);
  }
});
async function scrapProductCard(item) {
  await scraperAndGetProduct(`https://www.amazon.in/s?k=${item}`);
}

scrapProductCard("phone");
