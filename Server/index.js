"use strict";
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const ProductCard = require("./Models/mobiles");
const { scrapeAmazonProduct } = require("./Scraper/scraper");
const compression = require("compression");
require("dotenv").config();

const app = express();
app.use(compression());
// Middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(cors());
app.options("*", cors()); 
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connection established");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

// Routes
const productData = require("./routes/products");
const accountData = require("./routes/account");
app.use("/api", productData);
app.use("/api", accountData);

// Start server
const PORT = process.env.PORT || 3000;
if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
}
async function scrapProductCard(item) {
  try {
    let url = `https://www.amazon.in/s?k=${item}`;
    console.log(url);
    return await scrapeAmazonProduct(url, 1);
  } catch (err) {
    console.error("Error scraping product card:", err);
  }
}
let product_value = [
  "Samsung",
  "Apple",
  "Oppo",
  "Android",
  "iPhone",
  "Mac Book",
  "Thinkpad",
  "Phone",
  "Ear Bud",
  "RealMe",
  "Vivo",
  "One Plus",
  "POCO",
  "MI",
  "Laptop",
  "Acer",
  "Asus",
  "Laptop Bags",
  "Dell",
  "Lenovo",
  "Ear Phones",
  "Extended Screen",
  "Nothing",
  "IQOO",
  "Projector",
  "Chargers",
];
scrapProductCard(product_value[3]);
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
  process.exit(1);
});
module.exports = app;