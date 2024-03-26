"use strict";
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const ProductCard = require("./Models/mobiles");
const { scrapeAmazonProduct } = require("./Scraper/scraper");
require("dotenv").config();
const httpProxy = require("http-proxy");

const app = express();

const productData = require("./routes/products");
const accountData = require("./routes/account");

app.use(express.json());
app.use(cors());

app.use(express.json({ limit: '10mb' })); 
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use((err, req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://dns-deploy-eco-frontend.vercel.app");
  res.status(500).json({ error: err.message }); 
  next()
});

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
app.use("/api", productData);
app.use("/api", accountData);
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
  "Mac OS",
  "Windows",
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
scrapProductCard(product_value[0]);
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
  process.exit(1);
});
