const calculator = require("./calculator");
const greeting = require("./greeting");

try {
  console.log(greeting.welcome("Rahul"));

  console.log("Addition:", calculator.add(10, 5));
  console.log("Subtraction:", calculator.subtract(10, 5));
} catch (error) {
  console.error("Error:", error.message);
}
