const route = require('express').Router();

const { restaurantController } = require('../controllers');
const validateRestaurant = require('../middlewares/validateRestaurant');

route.get('/', restaurantController.getAllRestaurants);
route.get('/:id', restaurantController.getRestaurantById);
route.post('/', validateRestaurant, restaurantController.registerNewRestaurant);
route.put('/:id', validateRestaurant, restaurantController.AlterRestaurant);

module.exports = route;