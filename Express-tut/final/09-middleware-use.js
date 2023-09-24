const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");
//  req => middleware => res
app.use([logger, authorize]);
// api/home/about/products
app.get("/", (req, res) => {
  res.send("Home");
});
app.get("/about", (req, res) => {
  res.send("About");
});
app.get("/api/products", (req, res) => {
  res.send("Products");
});
app.get("/api/items", (req, res) => {
  console.log(req.user);
  res.send("Items");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000....");
});

// const express = require("express");
// const app = express();

// const authorize = (req, res, next) => {
//   const { user } = req.query;
//   if (user === "john") {
//     req.user = { name: "john", id: 3 };
//     next();
//   } else {
//     res.status(401).send("Unauthorized");
//   }
// };

// app.use(authorize);

// app.get("/", (req, res) => {
//   res.send("Home");
// });

// app.get("/about", (req, res) => {
//   res.send("About");
// });

// app.listen(5000, () => {
//   console.log("server is listening on port 5000....");
// });
