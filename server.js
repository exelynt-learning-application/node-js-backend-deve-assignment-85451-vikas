const express = require("express");

const app = express();

// Configurable Port
const PORT = process.env.PORT || 3000;

// Home Route
app.get("/", (req, res) => {
  res.status(200).send("Welcome to the Home Page");
});

// About Route
app.get("/about", (req, res) => {
  res.status(200).send("This is the About Page");
});

// Contact Route
app.get("/contact", (req, res) => {
  res.status(200).send("This is the Contact Page");
});

// Services Route
app.get("/services", (req, res) => {
  res.status(200).send("This is the Services Page");
});

// Handle Invalid Routes
app.use((req, res) => {
  res.status(404).send("404 - Page Not Found");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
