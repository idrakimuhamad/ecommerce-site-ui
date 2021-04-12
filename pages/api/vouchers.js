const data = require('../../fixtures/vouchers.json');

export default (req, res) => {
  res.status(200).json(data);
};
