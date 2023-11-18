module.exports = {
  allRestaurantsQuery: 'SELECT * FROM restaurants ORDER BY id',
  restaurantQuery: 'SELECT * FROM restaurants WHERE id = $1',
  findByNameAndAddressQuery: 'SELECT * FROM restaurants WHERE name = $1 AND address = $2',
  registerRestaurantQuery: `INSERT INTO
    restaurants (name, address, hours, image)
    VALUES ($1, $2, $3, $4)`,
  updateRestaurantQuery: `UPDATE restaurants SET
    name = $1,
    address = $2,
    hours = $3,
    image = $4
    WHERE id = $5`,
};