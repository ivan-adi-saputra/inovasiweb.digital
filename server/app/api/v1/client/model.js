const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const ClientSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Nama client harus diisi"],
      minlength: [3, "Nama client minimal 3 karakter"],
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      minlength: [5, "Password client minimal 5 karakter"],
    },
    phone: String,
    company: String,
    image: {
      type: Schema.Types.ObjectId,
      ref: "Image",
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    otp: String,
  },
  {
    timestamps: true,
  }
);

ClientSchema.pre("save", async function (next) {
  const Client = this;
  if (Client.isModified("password")) {
    Client.password = await bcrypt.hash(Client.password, 12);
  }
  next();
});

ClientSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);

  return isMatch;
};

module.exports = model("Client", ClientSchema);
