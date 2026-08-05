const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

// Home Route
app.get("/", (req, res) => {
  res.send("Welcome to the Home Page");
});

// Dynamic Route - User Name
app.get("/user/:name", (req, res) => {
  const name = req.params.name;
  res.send(`Hello, ${name}! Welcome to Express Routing.`);
});

// Dynamic Route - Product ID
app.get("/product/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Product ID: ${id}`);
});

// Dynamic Route - Student Details
app.get("/student/:name/:course", (req, res) => {
  const { name, course } = req.params;
  res.send(`Student: ${name}, Course: ${course}`);
});

// Invalid Route
app.use((req, res) => {
  res.status(404).send("404 - Page Not Found");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
