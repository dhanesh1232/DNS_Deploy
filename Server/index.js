"use strict";
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const ProductCard = require("./Models/mobiles");
const { scrapeAmazonProduct } = require("./Scraper/scraper");
require("dotenv").config();
const httpProxy = require("http-proxy");

const app = express();
const proxy = httpProxy.createProxyServer();

const productData = require("./routes/products");
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/api", (req, res) => {
  proxy.web(req, res, { target: "https://dns-deploy-eco-api.vercel.app" });
});

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
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
