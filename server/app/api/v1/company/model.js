const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const companySchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Nama perusahaan harus di isi"],
    },
    image: {
      type: mongoose.Types.ObjectId,
      ref: "Image",
      required: true,
    },
    description: String,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Company", companySchema);
