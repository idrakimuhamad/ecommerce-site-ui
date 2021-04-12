// product data, courtsey of fakestoreapi
const data = require('../../../fixtures/products.json');

export default (req, res) => {
  const { pid } = req.query;
  const product = data.find((d) => d.id == pid);

  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({
      message: 'No product found',
    });
  }
};
