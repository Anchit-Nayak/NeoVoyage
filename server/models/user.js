const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["tourist", "business"],
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  otp: {
    value: String,
    epoch: Number,
  },
  isActive: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
