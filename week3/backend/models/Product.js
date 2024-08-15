const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String },
  description: { type: String },
  imageUrl: { type: String },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
