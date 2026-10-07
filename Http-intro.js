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



const http = require("http");
 
const server = http.createServer((req,res)=>{
  console.log("Method",req.method);
  console.log("url:",req.url);
   res.end("hello from my node server");
});

server.listen(3000);