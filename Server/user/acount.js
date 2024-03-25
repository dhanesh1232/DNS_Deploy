const express = require("express");
const router = express.Router();

router.post("/user-registation", async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      user_name,
      email,
      password,
      confirm_password,
      phone,
    } = req.body;
  } catch (err) {
    res.json({
      message: err.message || "Unable to complete a user registration",
      success: false,
    });
  }
});
