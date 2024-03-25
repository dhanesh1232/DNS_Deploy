const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userAccountSchema = new Schema({
  user_name: {
    type: String,
    required: true,
    unique: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  profile: {
    type: String,
    default: "",
  },
  unique_id: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("userAccountSchema", userAccountSchema);
