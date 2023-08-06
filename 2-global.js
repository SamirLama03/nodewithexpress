// Instead of window, Node.js provides a set of different global objects that are specific to the server-side environment. Some of the common global objects in Node.js include:

// global: In Node.js, the global object is similar to the window object in browsers. It provides a global scope and allows you to access variables and functions from anywhere in your Node.js application.

// process: The process object provides information and control over the current Node.js process. It includes methods and properties related to the environment, command-line arguments, and more.

// console: The console object is used for logging messages to the console, which is helpful for debugging and monitoring your Node.js application.

// require: The require function is used to include external modules and libraries into your Node.js application.

// module and exports: These objects are used to define and expose modules and their functionality in Node.js.

// It's important to remember that Node.js is primarily designed for server-side applications, where you don't have access to a DOM (Document Object Model) like you would in a web browser. This difference in environment is why there is no window object in Node.js.

console.log(__dirname);
setInterval(() => {
  console.log("hello world");
}, 1000);
