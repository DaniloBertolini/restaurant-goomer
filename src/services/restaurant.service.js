const { restaurantModel } = require('../models');

const getAllRestaurants = async () => {
  const { rows } = await restaurantModel.findAll();
  return {
    codeStatus: 'SUCCESSFUL',
    data: rows,
  };
};

const getRestaurantById = async (id) => {
  const { rows } = await restaurantModel.findOne(id);
  return {
    codeStatus: 'SUCCESSFUL',
    data: rows,
  };
};

const registerNewRestaurant = async (body) => {
  const { name, address } = body;

  const { rows: restaurant } = await restaurantModel.findByNameAndAddress(name, address);
  if (restaurant.length > 0) {
    return {
      codeStatus: 'CONFLICT',
      data: {
        message: 'restaurant already exists',
      },
    };
  }

  await restaurantModel.register(body);
  const { rows } = await restaurantModel.findByNameAndAddress(name, address);

  return {
    codeStatus: 'SUCCESSFUL',
    data: rows,
  };
};

const AlterRestaurant = async (body) => {
  const { name, address } = body;
  await restaurantModel.update(body);

  const { rows } = await restaurantModel.findByNameAndAddress(name, address);

  return {
    codeStatus: 'SUCCESSFUL',
    data: rows,
  };
};

module.exports = {
  getAllRestaurants,
  getRestaurantById,
  registerNewRestaurant,
  AlterRestaurant,
};