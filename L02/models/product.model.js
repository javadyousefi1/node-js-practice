const products = require("../data/product.json");

async function find() {
  return new Promise((resolve, reject) => {
    resolve(products);
  });
}

const ProductModels = {
  find,
};

module.exports = ProductModels;
