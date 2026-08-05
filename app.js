const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b
};

// Custom Module 2: Greeting
const greeting = {
  welcome: (name) => `Welcome, ${name}!`
};

// Using the custom modules
console.log(greeting.welcome("Rahul"));
console.log("Addition:", calculator.add(10, 5));
console.log("Subtraction:", calculator.subtract(10, 5));
