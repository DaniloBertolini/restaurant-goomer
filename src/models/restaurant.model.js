const pool = require('../db/connection');
const {
  allRestaurantsQuery,
  registerRestaurantQuery,
  restaurantQuery,
  findByNameAndAddressQuery,
  updateRestaurantQuery,
} = require('./queries');

const findAll = async () => {
  const restaurants = await pool.query(allRestaurantsQuery);
  return restaurants;
};

const findOne = async (id) => {
  const restaurant = await pool.query(restaurantQuery, [id]);
  return restaurant;
};

const findByNameAndAddress = async (name, address) => {
  const restaurant = await pool.query(findByNameAndAddressQuery, [name, address]);
  return restaurant;
};

const register = async (body) => {
  const { name, address, hours, image } = body;
  await pool.query(registerRestaurantQuery, [name, address, hours, image]);
};

const update = async (body) => {
  const { id, name, address, hours, image } = body;
  await pool.query(updateRestaurantQuery, [name, address, hours, image, id]);
};

module.exports = {
  findAll,
  findOne,
  findByNameAndAddress,
  register,
  update,
};