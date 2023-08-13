const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Welcome to home page");
    res.end();
  }
  if (req.ulr === "/about") {
    res.write("Here is our short history");
    res.end();
  }
  res.end(`<h1>Oops!</h1>
  <p>cant find the page<p>
  <a href='/'>back home <a>
  `);
});

server.listen(5000);
