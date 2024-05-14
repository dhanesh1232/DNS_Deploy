"use strict";
const express = require("express");
const ProductCard = require("../Models/mobiles");
const { scrapeAmazonProduct } = require("../Scraper/scraper");
const router = express.Router();

router.get("/get-products", async (req, res) => {
  try {
    const products = await ProductCard.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({
      message: err.message || "Some error occurred while retrieving products.",
    });
  }
});
async function scrapProductCard(item) {
  try {
    let url = `https://www.amazon.in/s?k=${item}`;
    console.log(url);
    return await scrapeAmazonProduct(url, 1);
  } catch (err) {
    console.error("Error scraping product card:", err);
  }
}
router.get("/add-products", async (req, res) => {
   const { product_name } = req.query;
  console.log(product_name);
  try {
    scrapProductCard(product_name)
  } catch (err) {
    res.status(500).json({
      message: err.message || "Some error occurred while retrieving products.",
    });
  }
});

module.exports = router;
