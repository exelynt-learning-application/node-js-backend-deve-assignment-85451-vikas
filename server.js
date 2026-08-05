const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

// Built-in Middleware
app.use(express.json());

// Custom Logging Middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Custom Validation Middleware
function validateUser(req, res, next) {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({
      success: false,
      message: "Name is required."
    });
  }

  next();
}

// Home Route
app.get("/", (req, res) => {
  res.send("Welcome to Express Middleware Integration");
});

// POST Route with Validation
app.post("/user", validateUser, (req, res) => {
  res.status(201).json({
    success: true,
    message: `User ${req.body.name} created successfully.`
  });
});

// Handle Invalid Routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found"
  });
});

// Global Error Handler
app.use((err, req, res, next) => {
  res.status(500).json({
    success: false,
    message: "Internal Server Error"
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
