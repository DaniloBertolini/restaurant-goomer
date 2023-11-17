const { restaurantService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const getAllRestaurants = async (_req, res) => {
  const { codeStatus, data: restaurants } = await restaurantService.getAllRestaurants();
  res.status(mapStatusHTTP(codeStatus)).json(restaurants);
};

module.exports = {
  getAllRestaurants,
};