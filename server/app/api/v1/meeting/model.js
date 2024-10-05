const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const meetingSchema = Schema(
  {
    client: {
      type: Schema.Types.ObjectId,
      ref: "Client",
    },
    email: String,
    phone: String,
    datetime: {
      type: Date,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Meeting", meetingSchema);
