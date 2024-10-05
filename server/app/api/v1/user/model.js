const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const UserSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Nama harus diisi"],
      minlength: [5, "Nama minimal memiliki 5 karakter"],
    },
    email: {
      type: String,
      required: [true, "Email harus diisi"],
      unique: [true, "Email sudah terdaftar"],
    },
    password: {
      type: String,
      required: [true, "Password harus diisi"],
    },
    role: {
      type: String,
      enum: ["User", "Admin"],
      default: "User",
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    otp: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("User", UserSchema);
