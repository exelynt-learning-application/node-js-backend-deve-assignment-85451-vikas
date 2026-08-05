const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/shopdb")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const Category = require("./Category");
const Product = require("./Product");

// Create Category
app.post("/categories", async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).json(category);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get Categories
app.get("/categories", async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
});

// Create Product
app.post("/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get Products with Category Details
app.get("/products", async (req, res) => {
  const products = await Product.find().populate("category");
  res.json(products);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
