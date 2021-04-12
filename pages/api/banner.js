const data = require('../../fixtures/banner.json');

export default (req, res) => {
  res.status(200).json(data);
};
