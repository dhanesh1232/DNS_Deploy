const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const userAccountSchema = require("../Models/user_acount");
const nodemailer = require("nodemailer");
/*Mail OTP*/
function generateOTP() {
  const digits = "0123456789";
  let OTP = "";
  for (let i = 0; i < 6; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
}
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
    } else {
      /*Mail Set up*/
      let otp = generateOTP();
      async function sendEmail() {
        let transporter = nodemailer.createTransport({
          host: "smtp.gmail.com", 
          port: 587, 
          secure: false, 
          auth: {
            user: "ec.dhaneshreddy@gmail.com", 
            pass: process.env.APP_PASSWORD, 
          },
        });
        
        let info = await transporter.sendMail({
          from: "ec.dhaneshreddy@gmail.com",
          to: email,
          subject: "OTP for ECO Trends ✔", 
          text: `Your OTP for Eco Trends: ${otp}`, 
          html: `<p>Your OTP for Eco Trends: <strong>${otp}</strong></p>`,
        });

        console.log("Message sent: %s", info.messageId);
      }

      sendEmail().catch(console.error);

      /*Mail Set up Close*/
      const hashedPassword = await bcrypt.hash(password, 10);
      if (
        email === process.env.OWNER_EMAIL &&
        phone === process.env.OWNER_NUMBER
      ) {
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
          unique_id: uniqueUserId,
        });
        res.json({
          message: "User Created Successfully",
          acount: newUser,
          success: true,
        });
      } else {
        console.log(hashedPassword);
        const newUser = new userAccountSchema({
          user_name: username,
          first_name: firstName,
          last_name: lastName,
          email: email,
          password: hashedPassword,
          phone: phone,
        });
        res.json({
          message: "User Created Successfully",
          acount: newUser,
          success: true,
        });
      }
    }
  } catch (err) {
    res.json({
      message: err.message || "Unable to complete a user registration",
      success: false,
    });
  }
});
module.exports = router;
