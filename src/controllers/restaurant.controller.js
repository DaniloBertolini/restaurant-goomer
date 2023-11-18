const { restaurantService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const getAllRestaurants = async (_req, res) => {
  const { codeStatus, data: restaurants } = await restaurantService.getAllRestaurants();
  res.status(mapStatusHTTP(codeStatus)).json(restaurants);
};

const getRestaurantById = async (req, res) => {
  const { id } = req.params;
  const { codeStatus, data } = await restaurantService.getRestaurantById(id);
  res.status(mapStatusHTTP(codeStatus)).json(data);
};

const registerNewRestaurant = async (req, res) => {
  const { name, address, hours, image } = req.body;
  const { codeStatus, data } = await restaurantService
    .registerNewRestaurant({ name, address, hours, image });
  res.status(mapStatusHTTP(codeStatus)).json(data);
};

module.exports = {
  getAllRestaurants,
  getRestaurantById,
  registerNewRestaurant,
};