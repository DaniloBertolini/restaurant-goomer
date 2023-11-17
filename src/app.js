const express = require('express');
const { restaurantRoutes } = require('./routes');

const app = express();

app.get('/', (_req, res) => {
  res.status(200).json({ message: 'Hello World!' });
});

app.use(express.json());

app.use('/restaurant', restaurantRoutes);

module.exports = app;