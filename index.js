import http from "http";
const port = 4000;
http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("verden!");
    console.log('Server responded with "Hello, world!"');
  })
  .listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
