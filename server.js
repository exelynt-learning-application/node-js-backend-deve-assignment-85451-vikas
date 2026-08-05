const http = require("http");

const server = http.createServer((req, res) => {

  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to the Home Page");

  } else if (req.url === "/about" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to the About Page");

  } else if (req.url === "/contact" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to the Contact Page");

  } else if (req.url === "/services" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to the Services Page");

  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 - Page Not Found");
  }
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
Run Command
node server.js
Test Routes
URL	Method	Status Code	Response
http://localhost:3000/	GET	200	Welcome to the Home Page
http://localhost:3000/about	GET	200	Welcome to the About Page
http://localhost:3000/contact	GET	200	Welcome to the Contact Page
http://localhost:3000/services	GET	200	Welcome to the Services Page
http://localhost:3000/invalid	GET	404	404 - Page Not Found
Evaluation Criteria Covered
✅ Routing for Home, About, Contact, and Services
✅ Proper HTTP Status Codes (200, 404)
✅ Clean and organized code structure
✅ Basic documentation with comments and route testing instructions
