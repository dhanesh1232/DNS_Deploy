const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const userAccountSchema = require("../Models/user_acount");
const nodemailer = require("nodemailer");
const digits = "0123456789";
const pickedDigits = Array.from({ length: 2 }, () =>
  Math.floor(Math.random() * 10)
);
let otp;
/*Mail OTP*/
function generateOTP() {
  let OTP = "";
  for (let i = 0; i < 6; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
}
router.post("/mail-verfication", async (req, res) => {
  const { email, username, firstName, lastName } = req.body;
  try {
    const existUser = await userAccountSchema.findOne({
      email: email,
    });
    if (existUser) {
      res.json({
        message: "User Already Exists",
        success: false,
      });
      return;
    } else {
      /*Mail Set up*/
      otp = generateOTP();
      async function sendEmail() {
        let transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 587,
          secure: false,
          auth: {
            user: "ecoshopbusiness9@gmail.com",
            pass: process.env.APP_PASSWORD,
          },
        });

        let info = await transporter.sendMail({
          from: `"ECO DROP"<ecoshopbusiness9@gmail.com>`,
          to: email,
          subject:
            "Your One-Time Password (OTP) for ECO Price Drop Confirmation",
          text: `Your OTP for ECO DROP: ${otp}`,
          html: `<html>
                  <head>
                      <style>
                          body {
                              font-family: Arial, sans-serif;
                              background-color: #f9f9f9;
                              padding: 20px;
                          }
                          .container {
                              max-width: 600px;
                              margin: 0 auto;
                              background-color: #fff;
                              padding: 20px;
                              border-radius: 5px;
                              box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
                          }
                          .header {
                              text-align: center;
                              margin-bottom: 20px;
                          }
                          .content {
                              margin-bottom: 20px;
                          }
                          .footer {
                              text-align: center;
                              color: #777;
                          }
                      </style>
                  </head>
                  <body>
                      <div class="container">
                          <div class="header">
                              <h1>ECO Drop</h1>
                              <p>Welcome to <strong>ECO</strong> Drop!</p>
                          </div>
                          <div class="content">
                              <p>Dear ${firstName} ${lastName}</p>
                              <p>Username: <strong>${username}</strong></p>
                              <p>Your OTP for ECO DROP: <strong>${otp}</strong></p>
                              <p>Please use this OTP to complete your registration.</p>
                          </div>
                          <div class="footer">
                              <p>If you have any questions, contact us at <a href="mailto:ecoshopbusiness9@gmail.com">ecoshopbusiness9@gmail.com</a>.</p>
                          </div>
                      </div>
                  </body>
                  </html>
                `,
        });

        res.json({
          message: `OTP Successfully Sent to ${email}`,
          success: true,
        });
      }

      sendEmail().catch((error) => {
        res.status(500).json({
          message: "Failed to send OTP email",
          success: false,
          error: error.message,
        });
      });
      /*Mail Set up Close*/
    }
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
      success: false,
      error: err.message,
    });
  }
});

router.post("/verify-otp-register", async (req, res) => {
  const {
    firstName,
    lastName,
    username,
    email,
    password,
    confirmPassword,
    phone,
    userCode,
    userOtp,
  } = req.body;
  try {
    if (userOtp === otp) {
      console.log("Register");
      const hashedPassword = await bcrypt.hash(password, 10);
      const uniqueUserId =
        firstName.slice(0, parseInt(firstName.length / 2)).toUpperCase() +
        pickedDigits.join("") +
        phone.slice(7, 10) +
        (firstName.length >= 7
          ? firstName
              .slice(parseInt(firstName.length / 2), firstName.length)
              .toUpperCase()
          : firstName.slice(0, 4).split("").reverse().join("").toUpperCase()) +
        pickedDigits.join("");
      if (
        email === process.env.OWNER_EMAIL &&
        phone === process.env.OWNER_NUMBER
      ) {
        res.json({
          message: "User Created Successfully",
          account: newUser,
          success: true,
        });
      } else {
        res.json({
          message: `OTP Successfully Send to ${email}`,
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
