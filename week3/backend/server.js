const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection URL
const url =
  process.env.MONGODB_URI ||
  "mongodb+srv://yjadeja9963:yuvraj2001@midterm.bblwq8p.mongodb.net/?retryWrites=true&w=majority&appName=midterm";

// Connect to MongoDB
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
    dbName: "test",
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.error("Could not connect to MongoDB:", err.message);
    process.exit(1); // Exit process with failure
  });

// Routes
const shoeRoutes = require("./routes/shoes");
app.use("/api/shoes", shoeRoutes); // This will serve requests at /api/shoes

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Server Error:", err.stack);
  res.status(500).json({ message: "Something broke!", error: err.message });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
