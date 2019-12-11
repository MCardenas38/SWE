var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

var Order= sequelize.define("user_orders",{
    order_id:{ 
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    price: Sequelize.INTEGER,
	customer_id: Sequelize.INTEGER,
    delivery_id: Sequelize.INTEGER,
    restaurant_name: Sequelize.STRING,
    bid_start: Sequelize.BOOLEAN,
    bid_end: Sequelize.BOOLEAN,
    bid_price: Sequelize.INTEGER
});

Order.sync();

module.exports= Order;