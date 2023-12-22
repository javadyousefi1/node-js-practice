const http = require("http");
const getCourseController = require("./controllers/course.controller");
const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/api/courses") {
    getCourseController.get(req, res);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.write(JSON.stringify({ message: "route not found" }));
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`server run on port : ${PORT}`);
});
