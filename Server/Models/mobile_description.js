const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ProductDescriptionSchema = new Schema({
  product_title: {
    type: String,
    required: true,
    unique: true,
  },
  product_rating: {
    trype: String,
    required: true,
  },
  product_description: {
    type: String,
    required: true,
  },
  product_afiliate_url: {
    type: String,
    required: true,
  },
  product_image_url: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model(
  "ProductDescriptionSchema",
  ProductDescriptionSchema
);
