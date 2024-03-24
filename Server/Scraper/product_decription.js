const axios = require("axios");
const cheerio = require("cheerio");
const https = require("https");
require("dotenv").config();
const ProductCard = require("../Models/mobiles");

const scrapeProductInfo = async () => {
  try {
    const username = process.env.BRIGHT_DATA_USERNAME;
    const password = process.env.BRIGHT_DATA_PASSWORD;
    const port = 22225;
    const session_id = (100000 * Math.random()) | 0;
    const proxyUrl = `http://${username}-session-${session_id}:${password}@brd.superproxy.io:${port}`;

    const agent = new https.Agent({
      rejectUnauthorized: false,
    });

    const options = {
      host: "brd.superproxy.io",
      port,
      auth: {
        username: `${username}-session-${session_id}`,
        password,
      },
      rejectUnauthorized: false,
    };

    // Fetch URLs from MongoDB ProductCard collection
    const products = await ProductCard.find();
    console.log(products.length);
    for (const product of products) {
      console.log(`www.amazon.in${product.product_url}`);
      try {
        const res = await axios.get(
          `https://www.amazon.in${product.product_url}`,
          options
        );
        const $ = cheerio.load(res.data);
        const title = $("#productTitle").text().trim();
        console.log(title);
      } catch (err) {
        if (err.response) {
          if (err.response.status === 404) {
            console.error(`Product URL not found: ${product.product_url}`);
            continue;
          } else if (err.response.status === 503) {
            console.error(
              `Service Unavailable for URL: ${product.product_url}`
            );
            continue;
          }
        }
        throw err; // Re-throw other errors
      }
    }
  } catch (err) {
    throw new Error(`Failed to create or update product: ${err.message}`);
  }
};

module.exports = { scrapeProductInfo };
