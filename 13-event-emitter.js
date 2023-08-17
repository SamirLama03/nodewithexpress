const EventEmitter = require("events");

// Create an instance of EventEmitter
const customEmitter = new EventEmitter();

// Register an event listener for the "response" event
customEmitter.on("response", (name, id) => {
  console.log(`data received name: ${name} with id: ${id}`);
});
customEmitter.on("response", () => {
  console.log(`some other logic here`);
});

// Emit the "response" event, which triggers the event listener
customEmitter.emit("response", "samir", 34);
