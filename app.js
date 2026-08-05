const fs = require("fs");
const path = require("path");
const os = require("os");
const EventEmitter = require("events");

// Create Event Emitter
const eventEmitter = new EventEmitter();

// Log file
const logFile = "activity.log";

// Event for logging activities
eventEmitter.on("log", (message) => {
  fs.appendFileSync(logFile, message + "\n");
  console.log(message);
});

try {
  // Display System Information
  console.log("===== System Information =====");
  console.log("Hostname :", os.hostname());
  console.log("Platform :", os.platform());
  console.log("CPU Cores:", os.cpus().length);
  console.log("Memory   :", (os.totalmem() / 1024 / 1024).toFixed(2), "MB");
  console.log();

  // Create a folder
  const folder = path.join(__dirname, "documents");

  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder);
    eventEmitter.emit("log", "Folder created: documents");
  }

  // Create a file
  const filePath = path.join(folder, "sample.txt");

  fs.writeFileSync(filePath, "Welcome to Node.js Core Modules Project.");
  eventEmitter.emit("log", "File created: sample.txt");

  // Read file
  const data = fs.readFileSync(filePath, "utf8");
  console.log("File Content:");
  console.log(data);
  console.log();

  eventEmitter.emit("log", "File read successfully.");

} catch (error) {
  console.error("Error:", error.message);
}
