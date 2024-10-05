const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const projectSchema = Schema(
  {
    service: {
      type: Schema.Types.ObjectId,
      ref: "Service",
      required: [true, "Service harus diisi"],
    },
    client: {
      type: Schema.Types.ObjectId,
      ref: "Client",
    },
    date: {
      type: Date,
      default: Date.now(),
    },
    name: {
      type: String,
      required: [true, "Nama project harus diisi"],
      unique: true,
    },
    image: {
      type: Schema.Types.ObjectId,
      ref: "Image",
    },
    features: [String],
    description: String,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Project", projectSchema);
