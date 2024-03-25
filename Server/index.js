"use strict";
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const ProductCard = require("./Models/mobiles");
const { scrapeAmazonProduct } = require("./Scraper/scraper");
require("dotenv").config();
const app = express();
const productData = require("./routes/products");
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
mongoose
  .connect(process.env.MONGOOSE_URI)
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
app.use("/api", productData);
async function scrapProductCard(item) {
  let url = `https://www.amazon.in/s?k=${item}`;
  console.log(url);
  return await scrapeAmazonProduct(url, 1);
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
  "HP",
  "Tabels",
  "Ear Phones",
  "Extended Screen",
  "Nothing",
  "IQOO",
];

scrapProductCard(product_value[16]);
