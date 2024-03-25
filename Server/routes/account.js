const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const userAccountSchema = require("../Models/user_acount");
router.post("/user-registation", async (req, res) => {
  const {
    firstName,
    lastName,
    username,
    email,
    password,
    confirmPassword,
    phone,
  } = req.body;
  try {
    console.log(
      firstName,
      lastName,
      username,
      email,
      password,
      confirmPassword,
      phone
    );
    const existUser = await userAccountSchema.findOne({
      user_name: username,
      email: email,
    });
    if (existUser) {
      res.json({
        message: "User Already Exist",
        success: false,
      });
      return;
    }
    if (email === process.env.OWNER_EMAIL && phone === process.OWNER_NUMBER) {
      const hashedPassword = await bcrypt.hash(password, 10);
      const uniqueUserId =
        firstName.slice(0, 4).toUpperCase() + phone.slice(7, 10);
      console.log(hashedPassword, uniqueUserId);
      const newUser = new userAccountSchema({
        user_name: username,
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: hashedPassword,
        phone: phone,
        unique_id: uniqueId,
      });
    }
  } catch (err) {
    res.json({
      message: err.message || "Unable to complete a user registration",
      success: false,
    });
  }
});
module.exports = router;
