module.exports = {
  allRestaurantsQuery: 'SELECT * FROM restaurants',
  restaurantQuery: 'SELECT * FROM restaurants WHERE id = $1',
  findByNameAndAddressQuery: 'SELECT * FROM restaurants WHERE name = $1 AND address = $2',
  registerRestaurantQuery: `INSERT INTO
    restaurants (name, address, hours, image)
    VALUES ($1, $2, $3, $4)`,
};