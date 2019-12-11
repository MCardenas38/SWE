DROP DATABASE IF EXISTS binary_bite;
CREATE DATABASE binary_bite;
USE binary_bite;

CREATE TABLE users (
  user_id Int( 11 ) AUTO_INCREMENT,
  u_name VARCHAR( 25),
  username VARCHAR( 25),
  u_password VARCHAR( 10 ) NOT NULL,
  u_role VARCHAR (10) NOT NULL,

  PRIMARY KEY ( user_id )
);

CREATE TABLE registereds (
	customer_id Int(11),
    customer_name VARCHAR( 25),
    restaurant_name VARCHAR( 25),
    approval BOOLEAN,
    PRIMARY KEY ( customer_id )
);

CREATE TABLE restaurants (
	restaurant_name VARCHAR( 25),
    manager_id Int(11),
    address VARCHAR(80),
    img_src VARCHAR(130),
    PRIMARY KEY ( restaurant_name )
);

CREATE TABLE menus (
	food_id Int( 11 ) AUTO_INCREMENT,
    food_name VARCHAR( 25),
	restaurant_name VARCHAR( 25),
    price Int(11),
    PRIMARY KEY ( food_id )
);

CREATE TABLE user_orders (
	customer_id Int( 11 ),
    delivery_id Int( 11 ),
    bid_start Boolean,
    time_stamp TIMESTAMP,
    bid_end Boolean,
    bid_price Int( 11 )
);

INSERT INTO users (u_name, username, u_password, u_role) VALUES ('Matthews Cardenas','matt38','abcd1234','customer');
INSERT INTO users (u_name, username, u_password, u_role) VALUES ('Kevin Cardenas','kev','abcd1234','manager');
INSERT INTO users (u_name, username, u_password, u_role) VALUES ('Someone','someone','abcd1234','customer');

INSERT INTO restaurants (restaurant_name, manager_id, address, img_src) VALUES ('El Restaurante',2, '30-49 77th street East Elmhurst', 'https://pbs.twimg.com/profile_images/378800000097312368/ac56ba276bf14ab06d3da5b00c88b151.jpeg');

INSERT INTO registereds (customer_id, customer_name, restaurant_name) VALUES (1, 'Matthews Cardenas','El Restaurante');
INSERT INTO registereds (customer_id, customer_name, restaurant_name) VALUES (3, 'Someone','El Restaurante');

INSERT INTO menus(food_name, restaurant_name, price) VALUES ('fries','El Restaurante',3);
INSERT INTO menus(food_name, restaurant_name, price) VALUES ('burger','El Restaurante', 6);
INSERT INTO menus(food_name, restaurant_name, price) VALUES ('soda','El Restaurante',2);

