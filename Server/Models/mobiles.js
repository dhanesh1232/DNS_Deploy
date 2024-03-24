const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productCardSchema = new Schema({
  product_title: {
    type: String,
    required: true,
  },
  product_current_price: {
    type: String,
    required: true,
  },
  mrp_price: {
    type: String,
    required: true,
  },
  product_url: {
    type: String,
    required: true,
  },
  product_image_url: {
    type: String,
    required: true,
  },
  price_history: [
    {
      date: { type: String, default: Date.now },
      price: { type: String, default: 0 },
    },
  ],
});

const ProductCard = mongoose.model("ProductCard", productCardSchema);

module.exports = ProductCard;
