// product data, courtsey of fakestoreapi
const data = require('../../fixtures/products.json');

export default (req, res) => {
  const topProduct = data.slice(4, 8);
  const newProduct = data.slice(8, 12);
  res.status(200).json({
    topProduct,
    newProduct,
  });
};
