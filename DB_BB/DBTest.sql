DROP DATABASE IF EXISTS binary_bite;
CREATE DATABASE binary_bite;
USE binary_bite;

CREATE TABLE users (
  user_id Int( 11 ) AUTO_INCREMENT,
  u_name VARCHAR( 25),
  username VARCHAR( 25),
  u_password VARCHAR( 10 ) NOT NULL,
  u_role VARCHAR (15) NOT NULL,

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
    cook_id Int(11),
    salesperson_id Int(11),
    address VARCHAR(80),
    img_src VARCHAR(130),
    PRIMARY KEY ( restaurant_name )
);

CREATE TABLE menus (
	food_id Int( 11 ) AUTO_INCREMENT,
    food_name VARCHAR( 25),
	restaurant_name VARCHAR( 25),
    price Int(11),
    food_count Int(11) default 0,
    PRIMARY KEY ( food_id )
);

CREATE TABLE supplies (
	supply_id Int( 11 ) AUTO_INCREMENT,
    supply_name VARCHAR( 25),
	restaurant_name VARCHAR( 25),
    supply_price Int(11),
    PRIMARY KEY ( supply_id )
);

CREATE TABLE user_orders (
	order_id Int( 11 ) AUTO_INCREMENT,
    price Int( 11 ),
	customer_id Int( 11 ),
    delivery_id Int( 11 ),
    restaurant_name VARCHAR( 25),
    bid_start Boolean default 0,
    bid_end Boolean default 0,
    bid_price Int( 11 ),
    primary key(order_id)
);

INSERT INTO users (u_name, username, u_password, u_role) VALUES ('Matthews Cardenas','matt38','abcd1234','customer');
INSERT INTO users (u_name, username, u_password, u_role) VALUES ('Kevin Cardenas','kev','abcd1234','manager');
INSERT INTO users (u_name, username, u_password, u_role) VALUES ('Steve','steve00','abcd1234','customer');
INSERT INTO users (u_name, username, u_password, u_role) VALUES ('Ramsey','ram01','abcd1234','cook');
INSERT INTO users (u_name, username, u_password, u_role) VALUES ('Mike','mike07','abcd1234','salesperson');
INSERT INTO users (u_name, username, u_password, u_role) VALUES ('Davey','dav19','abcd1234','delivery');

INSERT INTO restaurants (restaurant_name, manager_id, cook_id, salesperson_id, address, img_src) VALUES ('El Restaurante',2,4,5, '30-49 77th street East Elmhurst', 'https://pbs.twimg.com/profile_images/378800000097312368/ac56ba276bf14ab06d3da5b00c88b151.jpeg');


INSERT INTO registereds (customer_id, customer_name, restaurant_name) VALUES (3, 'Steve','El Restaurante');

INSERT INTO menus(food_name, restaurant_name, price) VALUES ('fries','El Restaurante',3);
INSERT INTO menus(food_name, restaurant_name, price) VALUES ('burger','El Restaurante', 6);
INSERT INTO menus(food_name, restaurant_name, price) VALUES ('soda','El Restaurante',2);
INSERT INTO menus(food_name, restaurant_name, price) VALUES ('salad','El Restaurante',25);
INSERT INTO menus(food_name, restaurant_name, price) VALUES ('steak','El Restaurante',35);
INSERT INTO menus(food_name, restaurant_name, price) VALUES ('pizza','El Restaurante',2);

INSERT INTO supplies(supply_name, restaurant_name, supply_price) VALUES ('potato','El Restaurante',10);
INSERT INTO supplies(supply_name, restaurant_name, supply_price) VALUES ('buns','El Restaurante', 15);
INSERT INTO supplies(supply_name, restaurant_name, supply_price) VALUES ('beef','El Restaurante',20);

DROP DATABASE IF EXISTS binary_bite;
CREATE DATABASE binary_bite;
USE binary_bite;

CREATE TABLE users (
  user_id Int( 11 ) AUTO_INCREMENT,
  u_name VARCHAR( 25),
  username VARCHAR( 25),
  u_password VARCHAR( 10 ) NOT NULL,
  u_role VARCHAR (15) NOT NULL,

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
    cook_id Int(11),
    salesperson_id Int(11),
    address VARCHAR(80),
    img_src VARCHAR(130),
    PRIMARY KEY ( restaurant_name )
);

CREATE TABLE menus (
	food_id Int( 11 ) AUTO_INCREMENT,
    food_name VARCHAR( 25),
	restaurant_name VARCHAR( 25),
    price Int(11),
    food_count Int(11) default 0,
    PRIMARY KEY ( food_id )
);

CREATE TABLE supplies (
	supply_id Int( 11 ) AUTO_INCREMENT,
    supply_name VARCHAR( 25),
	restaurant_name VARCHAR( 25),
    supply_price Int(11),
    PRIMARY KEY ( supply_id )
);

CREATE TABLE user_orders (
	order_id Int( 11 ) AUTO_INCREMENT,
    price Int( 11 ),
	customer_id Int( 11 ),
    delivery_id Int( 11 ),
    restaurant_name VARCHAR( 25),
    bid_start Boolean default 0,
    bid_end Boolean default 0,
    bid_price Int( 11 ),
    primary key(order_id)
);

INSERT INTO users (u_name, username, u_password, u_role) VALUES ('Matthews Cardenas','matt38','abcd1234','customer');
INSERT INTO users (u_name, username, u_password, u_role) VALUES ('Kevin Cardenas','kev','abcd1234','manager');
INSERT INTO users (u_name, username, u_password, u_role) VALUES ('Someone','someone','abcd1234','customer');
INSERT INTO users (u_name, username, u_password, u_role) VALUES ('Ramsey','ram01','abcd1234','cook');
INSERT INTO users (u_name, username, u_password, u_role) VALUES ('Mike','mike07','abcd1234','salesperson');
INSERT INTO users (u_name, username, u_password, u_role) VALUES ('Davey','dav19','abcd1234','delivery');

INSERT INTO restaurants (restaurant_name, manager_id, cook_id, salesperson_id, address, img_src) VALUES ('El Restaurante',2,4,5, '30-49 77th street East Elmhurst', 'https://pbs.twimg.com/profile_images/378800000097312368/ac56ba276bf14ab06d3da5b00c88b151.jpeg');

INSERT INTO registereds (customer_id, customer_name, restaurant_name) VALUES (3, 'Someone','El Restaurante');

INSERT INTO menus(food_name, restaurant_name, price) VALUES ('fries','El Restaurante',3);
INSERT INTO menus(food_name, restaurant_name, price) VALUES ('burger','El Restaurante', 6);
INSERT INTO menus(food_name, restaurant_name, price) VALUES ('soda','El Restaurante',2);

INSERT INTO supplies(supply_name, restaurant_name, supply_price) VALUES ('potato','El Restaurante',10);
INSERT INTO supplies(supply_name, restaurant_name, supply_price) VALUES ('buns','El Restaurante', 15);
INSERT INTO supplies(supply_name, restaurant_name, supply_price) VALUES ('beef','El Restaurante',20);

