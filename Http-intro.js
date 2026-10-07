// The 'http' module allows Node.js to create HTTP servers and handle requests and responses.
// const http =require("http");

// ==================== HTTP & NODE SERVER ====================

// HTTP allows clients and servers to communicate.

// Client → sends HTTP request → Server
// Client ← receives HTTP response ← Server

// Node.js has a built-in `http` module for creating HTTP servers.

// http.createServer() creates a server.
// Its callback runs whenever a request arrives.

// req → contains information about the incoming request.
// res → used to send a response back to the client.

// server.listen(3000) starts the server on port 3000.

// Basic flow:
//
// Browser
//    ↓ request
// Node server
//    ↓ callback(req, res)
// res.end()
//    ↓ response
// Browser


// const server = http.createServer((req,res)=>{
//     res.statusCode = 200;
//     res.setHeader("Content-type","text/plain");
//     res.end("hello from my first server!");
// });

// server.listen(3000,()=>{
//     console.log("Server running at http://localhost:3000");
// });


const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Method:", req.method);
  console.log("URL:", req.url);
  console.log("Host:", req.headers.host);
  console.log("User-Agent:", req.headers["user-agent"]);
  console.log("-----");

  res.setHeader("Content-Type", "text/plain");
  res.end(`You asked for ${req.method} ${req.url}`);
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
