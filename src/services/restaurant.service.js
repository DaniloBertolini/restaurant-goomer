const { restaurantModel } = require('../models');

const getAllRestaurants = async () => {
  const { rows } = await restaurantModel.findAll();
  return {
    codeStatus: 'SUCCESSFUL',
    data: rows,
  };
};

module.exports = {
  getAllRestaurants,
};