"use strict";
const express = require("express");
const ProductCard = require("../Models/mobiles");
const router = express.Router();

router.get("/get-products", async (req, res) => {
  try {
    const products = await ProductCard.find();
    res.json(products);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving products.",
    });
  }
});
module.exports = router;
