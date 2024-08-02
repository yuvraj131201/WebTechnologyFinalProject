const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String }, // Add category field
  description: { type: String }, // Add description field
  imageUrl: { type: String }, // Add image URL field
  // Add other fields as needed
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
