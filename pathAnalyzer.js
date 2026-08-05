const path = require("path");

// Sample file path
const filePath = "./documents/report.pdf";

// Get path details
const directory = path.dirname(filePath);
const fileName = path.basename(filePath);
const extension = path.extname(filePath);
const absolutePath = path.resolve(filePath);

// Display results
console.log("Directory Name :", directory);
console.log("File Name      :", fileName);
console.log("Extension      :", extension);
console.log("Absolute Path  :", absolutePath);
