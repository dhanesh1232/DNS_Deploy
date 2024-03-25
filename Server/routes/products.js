"use strict";
const express = require("express");
const ProductCard = require("../Models/mobiles");
const router = express.Router();

router.get("/get-products", async (req, res) => {
  try {
    res.json({ message: "Hello World!", success: true });
  } catch (err) {
    console.error(err);
  }
});
module.exports = router;
