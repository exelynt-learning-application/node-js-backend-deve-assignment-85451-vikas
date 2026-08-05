const fs = require("fs");
const path = require("path");

const sourceFolder = "./files";

if (!fs.existsSync(sourceFolder)) {
  console.log("Source folder does not exist.");
  process.exit(1);
}

try {
  const files = fs.readdirSync(sourceFolder);

  files.forEach((file) => {
    const filePath = path.join(sourceFolder, file);

    if (fs.statSync(filePath).isFile()) {
      const extension = path.extname(file).slice(1) || "others";
      const destinationFolder = path.join(sourceFolder, extension);

      if (!fs.existsSync(destinationFolder)) {
        fs.mkdirSync(destinationFolder);
      }

      const destinationPath = path.join(destinationFolder, file);
      fs.renameSync(filePath, destinationPath);

      console.log(`${file} moved to ${extension}/`);
    }
  });

  console.log("Files organized successfully.");
} catch (error) {
  console.log("Error:", error.message);
}
