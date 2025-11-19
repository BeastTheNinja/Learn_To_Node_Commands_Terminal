import http from "http";

http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Goddag med jer i verden!");
    console.log('Server responded with "Hello, world!"');
  })
  .listen(4000, () => {
    console.log("Server is running on http://localhost:4000");
  });
