const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const imageSchema = Schema(
  {
    name: String,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Image", imageSchema);
