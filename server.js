// Import the http module
const http = require("http");

// Create a server
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, Node.js!");
});

// Listen on a specific port
const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
