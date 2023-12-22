const http = require("http");
const products = require("./data/product");
const ProductController = require("./controllers/product.controllers");
const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/api/products") {
    ProductController.get(req, res);
  } else {
    res.writeHead(404, { "content-type": "application/json" });
    res.write(JSON.stringify({ message: "Route not found" }));
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
