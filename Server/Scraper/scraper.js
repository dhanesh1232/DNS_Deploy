const axios = require("axios");
const cheerio = require("cheerio");
const https = require("https");
require("dotenv").config();
const ProductCard = require("../Models/mobiles");

const scrapeAmazonProduct = async (url, page) => {
  if (!url) return;
  const username = process.env.BRIGHT_DATA_USERNAME;
  const password = process.env.BRIGHT_DATA_PASSWORD;
  const port = 22225;
  const session_id = (100000 * Math.random()) | 0;

  const agent = new https.Agent({
    rejectUnauthorized: false,
  });

  const options = {
    proxy: {
      host: "brd.superproxy.io",
      port,
      auth: {
        username: `${username}-session-${session_id}`,
        password,
      },
    },
    httpsAgent: agent,
  };

  let pages = page;
  const products = [];

  while (true) {
    try {
      console.log(`Next Page ${pages} Started....`);
      const res = await axios.get(`${url}&page=${pages}`,
        options,
      );
      const $ = cheerio.load(res.data);
      $('div[data-component-type="s-search-result"]').each(
        async (index, element) => {
          let product = {
            product_title: $(element)
              .find(".a-size-medium.a-color-base.a-text-normal")
              .text()
              .trim(),
            product_current_price: $(element)
              .find("span.a-price-whole")
              .text()
              .trim(),
            product_rating: $(element)
              .find(".a-icon-star-small > .a-icon-alt")
              .text()
              .trim(),
            mrp_price:
              $(element).find(".a-text-price > .a-offscreen").text().trim() ||
              0,
            product_url: $(element).find("h2 > a").attr("href"),
            product_image_url: $(element).find(".s-image").attr("src"),
          };
          if (product.product_title && product.product_title.trim() !== "") {
            let existingProduct = await ProductCard.findOne({
              product_title: product.product_title,
            });
            if (!existingProduct) {
              if (product.product_current_price !== "") {
                let todayDate = new Date().toLocaleDateString();
                let toDayPrice = product.product_current_price;
                let newProductCard = new ProductCard({
                  ...product,
                  price_history: [
                    {
                      date: todayDate,
                      price: toDayPrice,
                    },
                  ],
                });
                await newProductCard.save();
                console.log("New product added Successfully");
              } else {
                console.log(
                  "Invalid product price:",
                  product
                );
              }
            } else {
              let todayDate = new Date().toLocaleDateString();
              let toDayPrice = product.product_current_price;

              const lastEntry =
                existingProduct.price_history[
                  existingProduct.price_history.length - 1
                ];

              const isPriceChanged =
                !lastEntry || lastEntry.price !== toDayPrice;
              const isDateChanged = !lastEntry || lastEntry.date !== todayDate;

              if (isPriceChanged || isDateChanged) {
                existingProduct.price_history.push({
                  date: todayDate,
                  price: toDayPrice,
                });
                console.log("Product price changed, saved in DB");
                await existingProduct.save();
              } else {
                if (
                  existingProduct.price_history[
                    existingProduct.price_history.length - 1
                  ].date === new Date().toLocaleDateString()
                ) {
                  console.log(
                    `product price not changed due to this ${
                      existingProduct.price_history[
                        existingProduct.price_history.length - 1
                      ].date
                    } was already exist and same price`
                  );
                }
              }
            }
          } else {
            console.log("Invalid product title:", product.product_title);
          }
        }
      );
      const nextButton = $(".a-last");
      if (!nextButton.hasClass("a-disabled")) {
        pages++;
      } else {
        break;
      }
    } catch (err) {
      if (err.response && err.response.status === 503) {
        await new Promise((resolve) => setTimeout(resolve, 3000));
      } else {
        console.log(err);
        throw new Error(`Failed to scrape product: ${err.message}`);
      }
    }
  }

  return products;
};

module.exports = { scrapeAmazonProduct };
