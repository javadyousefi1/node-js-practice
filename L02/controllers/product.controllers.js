const ProductModels = require("../models/product.model");

async function get(req, res) {
  try {
    const products = await ProductModels.find();
    res.writeHead(200, { "content-type": "application/json" });
    res.write(JSON.stringify(products));
    res.end();
  } catch (e) {
    res.writeHead(200, { "content-type": "application/json" });
    res.write(JSON.stringify({ message: "can get data" }));
    res.end();
  }
}

const ProductController = {
  get,
};

module.exports = ProductController;
