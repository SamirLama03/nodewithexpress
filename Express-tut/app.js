const express = require("express");
const app = express();
let { people } = require("./data");

app.use(express.static("./methods-public"));
app.use(express.urlencoded({ extended: false }));

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.get("/api/people/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).json({ success: true, id });
});

app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    res.status(400).json({ success: false, msg: "provide a name" });
  } else {
    res.status(201).json({ success: true, person: name });
  }
});

app.post("/api/postman/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide valid credentials" });
  } else {
    res.status(201).json({ success: true, data: [...people, name] });
  }
});

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    res.status(201).send(`Welcome${name}`);
  } else {
    res.status(401).send("Please provide credentials");
  }
});

app.put("api/people/:id", (req, res) => {
  const { name } = req.body;
  const { id } = req.params;

  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    res.status(404).json({ success: false, msg: ` no person with ${id}` });
  }
  const newPerson = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(200).json({ success: true, data: newPerson });
});

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});
