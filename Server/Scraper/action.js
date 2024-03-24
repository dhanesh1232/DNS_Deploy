"use server";

const { scrapeAmazonProduct } = require("./scraper");

const scraperAndGetProduct = async (product_url) => {
  if (!product_url) return;
  try {
    const scrapedProduct = await scrapeAmazonProduct(product_url);
  } catch (err) {
    throw new Error(`Failed to create a/update product: ${err.message}`);
  }
};
module.exports = { scraperAndGetProduct };
