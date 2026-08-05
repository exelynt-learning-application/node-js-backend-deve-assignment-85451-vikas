const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

// In-memory Product Data
let products = [
  {
    id: 1,
    name: "Laptop",
    price: 50000
  },
  {
    id: 2,
    name: "Mobile",
    price: 20000
  }
];

// GET - Retrieve All Products
app.get("/products", (req, res) => {
  res.status(200).json(products);
});

// GET - Retrieve Product by ID
app.get("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({
      message: "Product not found"
    });
  }

  res.status(200).json(product);
});

// POST - Add Product
app.post("/products", (req, res) => {
  const { name, price } = req.body;

  if (!name || !price) {
    return res.status(400).json({
      message: "Name and Price are required"
    });
  }

  const product = {
    id: products.length + 1,
    name,
    price
  };

  products.push(product);

  res.status(201).json({
    message: "Product added successfully",
    product
  });
});

// PUT - Update Product
app.put("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({
      message: "Product not found"
    });
  }

  product.name = req.body.name;
  product.price = req.body.price;

  res.status(200).json({
    message: "Product updated successfully",
    product
  });
});

// DELETE - Delete Product
app.delete("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = products.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "Product not found"
    });
  }

  products.splice(index, 1);

  res.status(200).json({
    message: "Product deleted successfully"
  });
});

// Invalid Route
app.use((req, res) => {
  res.status(404).json({
    message: "Route Not Found"
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
