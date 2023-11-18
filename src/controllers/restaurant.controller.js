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

const alterRestaurant = async (req, res) => {
  const { id } = req.params;
  const { name, address, hours, image } = req.body;
  const { codeStatus, data } = await restaurantService
    .alterRestaurant({ id, name, address, hours, image });
  res.status(mapStatusHTTP(codeStatus)).json(data);
};

const deleteRestaurant = async (req, res) => {
  const { id } = req.params;
  const { codeStatus, data } = await restaurantService
    .deleteRestaurant(id);

  if (data) {
    return res.status(mapStatusHTTP(codeStatus)).json(data);
  }
  
  res.status(mapStatusHTTP(codeStatus)).end();
};

module.exports = {
  getAllRestaurants,
  getRestaurantById,
  registerNewRestaurant,
  alterRestaurant,
  deleteRestaurant,
};