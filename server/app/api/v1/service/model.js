const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const serviceSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Nama service harus diisi"],
      minlength: [5, "Nama service minimal 5 karakter"],
      maxlength: [50, "Nama service maksimal 50 karakter"],
    },
    benefits: {
      type: [String],
      default: null,
    },
    description: String,
    price: {
      type: Number,
      required: [true, "Harga service harus diisi"],
      min: [0, "Harga service minimal 0"],
    },
    isRecomended: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Service", serviceSchema);
