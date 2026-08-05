const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Sample Data
let students = [
  { id: 1, name: "Rahul", course: "Node.js" },
  { id: 2, name: "Amit", course: "Express.js" },
  { id: 3, name: "Priya", course: "MongoDB" }
];

// Home Route
app.get("/", (req, res) => {
  res.send("Welcome to Student API");
});

// GET All Students
app.get("/students", (req, res) => {
  res.status(200).json(students);
});

// GET Student by Route Parameter
app.get("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const student = students.find(s => s.id === id);

  if (!student) {
    return res.status(404).json({
      message: "Student not found"
    });
  }

  res.status(200).json(student);
});

// GET Students by Query Parameter
// Example: /search?course=Node.js
app.get("/search", (req, res) => {
  const { course } = req.query;

  const result = students.filter(
    student => student.course.toLowerCase() === course.toLowerCase()
  );

  if (result.length === 0) {
    return res.status(404).json({
      message: "No students found"
    });
  }

  res.status(200).json(result);
});

// POST - Add Student
app.post("/students", (req, res) => {
  const { name, course } = req.body;

  if (!name || !course) {
    return res.status(400).json({
      message: "Name and Course are required"
    });
  }

  const student = {
    id: students.length + 1,
    name,
    course
  };

  students.push(student);

  res.status(201).json({
    message: "Student added successfully",
    student
  });
});

// PUT - Update Student
app.put("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const student = students.find(s => s.id === id);

  if (!student) {
    return res.status(404).json({
      message: "Student not found"
    });
  }

  student.name = req.body.name || student.name;
  student.course = req.body.course || student.course;

  res.status(200).json({
    message: "Student updated successfully",
    student
  });
});

// DELETE Student
app.delete("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = students.findIndex(s => s.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "Student not found"
    });
  }

  students.splice(index, 1);

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
