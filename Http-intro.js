// The 'http' module allows Node.js to create HTTP servers and handle requests and responses.
// const http =require("http");

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
