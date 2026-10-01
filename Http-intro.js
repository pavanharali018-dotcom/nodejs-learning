// The 'http' module allows Node.js to create HTTP servers and handle requests and responses.
const http =require("http");

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader("Content-type","text/plain");
    res.end("hello from my first server!");
});

server.listen(3000,()=>{
    console.log("Server running at http://localhost:3000");
});