const checkRequiredFields = require('../utils/checkRequiredFields');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const validateRestaurant = (req, res, next) => {
  const { body } = req;
  const requiredFields = ['name', 'address', 'hours', 'image'];
  const missingKeys = checkRequiredFields(body, requiredFields);
  
  if (missingKeys) {
    return res.status(mapStatusHTTP('BAD_REQUEST')).json({ message: missingKeys });
  }

  next();
};

module.exports = validateRestaurant;