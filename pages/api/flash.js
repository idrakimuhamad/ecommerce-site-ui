// product data, courtsey of fakestoreapi
const data = require('../../fixtures/products.json');

export default (req, res) => {
  const flashSale = data.slice(0, 4);
  res.status(200).json(flashSale);
};
