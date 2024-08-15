const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Define the schema for shoes
const shoeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String },
  description: { type: String },
  imageUrl: { type: String },
});

// Create the model using the 'shoes' collection
const Shoe = mongoose.model("Shoe", shoeSchema, "shoes");

// GET /api/shoes - Retrieve all shoes data
router.get("/", async (req, res) => {
  try {
    const shoes = await Shoe.find();
    res.json(shoes);
  } catch (error) {
    console.error("Error fetching shoes:", error.message); // Enhanced console log
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

// POST /api/shoes - Create a new shoe data
router.post("/", async (req, res) => {
  try {
    const { name, price, category, description, imageUrl } = req.body;

    // Validate required fields
    if (!name || !price) {
      return res.status(400).json({ message: "Name and price are required" });
    }

    const newShoe = new Shoe({
      name,
      price,
      category,
      description,
      imageUrl,
    });

    const savedShoe = await newShoe.save();
    res.status(201).json(savedShoe);
  } catch (error) {
    console.error("Error creating shoe:", error.message); // Enhanced console log
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

// PUT /api/shoes/:id - Update a shoe by ID
router.put("/:id", async (req, res) => {
  try {
    const { name, price, category, description, imageUrl } = req.body;

    const updatedShoe = await Shoe.findByIdAndUpdate(
      req.params.id,
      { $set: { name, price, category, description, imageUrl } },
      { new: true, runValidators: true } // Return the updated document and validate
    );

    if (!updatedShoe) {
      return res.status(404).json({ message: "Shoe not found" });
    }

    res.json(updatedShoe);
  } catch (error) {
    console.error("Error updating shoe:", error.message); // Enhanced console log
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

// DELETE /api/shoes/:id - Delete a shoe by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedShoe = await Shoe.findByIdAndDelete(req.params.id);

    if (!deletedShoe) {
      return res.status(404).json({ message: "Shoe not found" });
    }

    res.json({ message: "Shoe deleted" });
  } catch (error) {
    console.error("Error deleting shoe:", error.message); // Enhanced console log
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

module.exports = router;
