/** @format */
const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, default: "---" },
    prise: { type: Number, required: true, default: 0 },
    rating: { type: Number, default: 0 },
    img: { type: String, default: "" },
    type: { type: String, default: "" },
    brand: { type: String, required: true, default: "-" },
    desc: { type: String, default: "" },
  },
  { versionKey: false, timestamps: true }
);

module.exports = mongoose.model("products", productsSchema);