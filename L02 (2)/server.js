const http = require("http");
const getCourseController = require("./controllers/course.controller");
const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/api/courses" && req.method === "GET") {
    getCourseController.get(req, res);
  } else if (req.url.match(/\/api\/courses\/[0-9]+/) && req.method === "GET") {
    getCourseController.getById(req, res)
  } else if (req.url === "/api/courses" && req.method === "POST") {
    getCourseController.create(req, res)
  } else if (req.url.match(/\/api\/courses\/[0-9]+/) && req.method === "PUT") {
    getCourseController.update(req, res)
  }
  else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.write(JSON.stringify({ message: "route not found" }));
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`server run on port : ${PORT}`);
});
