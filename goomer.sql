CREATE goomerdb;

CREATE TABLE restaurants (
  id serial primary key,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  hours VARCHAR(255) NOT NULL,
  image VARCHAR(255) NOT NULL
);
CREATE TABLE products (
  id serial primary key,
  name VARCHAR(255) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  image VARCHAR(255) NOT NULL,
  category VARCHAR(255) NOT NULL
);
CREATE TABLE employee (
  id serial primary key,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  restaurant_id INT NOT NULL,
  FOREIGN KEY (restaurant_id) REFERENCES restaurants(id)
);
CREATE TABLE products_restaurants (
  id serial primary key,
  restaurant_id INT NOT NULL,
  product_id INT NOT NULL,
  FOREIGN KEY (restaurant_id) REFERENCES restaurants(id),
  FOREIGN KEY (product_id) REFERENCES products(id)
);