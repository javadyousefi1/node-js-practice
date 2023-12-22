const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify({ message: "hello node js" }));
    res.end();
  })
  .listen(3000, () => {
    console.log("server running on port 3000");
  });
