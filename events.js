// An event is an action or occurrence that your program can respond to.
const EventEmitter = require("events");

const myEmitter = new EventEmitter();

// Listen for an event
myEmitter.on("greet", () => {
    console.log("Hello bro!");
});

// Trigger the event
myEmitter.emit("greet");