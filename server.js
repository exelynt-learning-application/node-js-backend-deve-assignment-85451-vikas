const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

// Built-in Middleware
app.use(express.json());

// Sample Data
let students = [
  { id: 1, name: "Rahul" },
  { id: 2, name: "Amit" }
];

// GET - Read Data
app.get("/students", (req, res) => {
  res.status(200).json(students);
});

// POST - Create Data
app.post("/students", (req, res) => {
  const student = {
    id: students.length + 1,
    name: req.body.name
  };

  students.push(student);

  res.status(201).json({
    message: "Student added successfully",
    student
  });
});

// PUT - Update Entire Record
app.put("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const student = students.find(s => s.id === id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  student.name = req.body.name;

  res.status(200).json({
    message: "Student updated successfully",
    student
  });
});

// PATCH - Partial Update
app.patch("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const student = students.find(s => s.id === id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  if (req.body.name) {
    student.name = req.body.name;
  }

  res.status(200).json({
    message: "Student updated successfully",
    student
  });
});

// DELETE - Remove Data
app.delete("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);

  students = students.filter(s => s.id !== id);

  res.status(200).json({
    message: "Student deleted successfully"
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
