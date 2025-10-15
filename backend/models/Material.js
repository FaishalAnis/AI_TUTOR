const mongoose = require("mongoose");

const materialSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true }, // text content or summary
  link: { type: String },                     // URL to PDF/video/article
  tags: [String]
}, { timestamps: true });

module.exports = mongoose.model("Material", materialSchema);
