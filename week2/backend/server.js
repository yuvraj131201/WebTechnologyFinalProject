const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection URL
const url = process.env.MONGODB_URI || "mongodb+srv://dhairyabhavsar25:25Dhairya@midterm.qmtosbw.mongodb.net/sample_mflix?retryWrites=true&w=majority";

// Connect to MongoDB
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
  dbName: "sample_mflix" // Ensure this is correct
})
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => {
    console.error("Could not connect to MongoDB:", err);
    process.exit(1); // Exit process with failure
  });

// Routes
const productRoutes = require('./routes/products');
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
