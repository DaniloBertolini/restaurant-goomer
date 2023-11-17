const route = require('express').Router();

const { restaurantController } = require('../controllers');

route.get('/', restaurantController.getAllRestaurants);

module.exports = route;