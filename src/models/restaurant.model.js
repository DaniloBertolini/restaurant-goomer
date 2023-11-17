const pool = require('../db/connection');
const { allRestaurantsQuery } = require('./queries');

const findAll = () => {
  const restaurants = pool.query(allRestaurantsQuery);
  return restaurants;
};

module.exports = {
  findAll,
};