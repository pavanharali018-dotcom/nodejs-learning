// The 'http' module allows Node.js to create HTTP servers and handle requests and responses.
const http = require("http");
const server = http.createServer((req, res) => {
    res.end("Hello from my Node.js server!");
});