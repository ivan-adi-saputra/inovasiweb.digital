const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const bcrypt = require("bcryptjs");

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
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", async function (next) {
  const User = this;
  if (User.isModified("password")) {
    User.password = await bcrypt.hash(User.password, 12);
  }
  next();
});

UserSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);

  return isMatch;
};

module.exports = model("User", UserSchema);
