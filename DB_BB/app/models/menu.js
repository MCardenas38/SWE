var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

var Menu= sequelize.define("menus",{
    food_id: Sequelize.INTEGER,
    food_name: Sequelize.STRING,
	restaurant_name:{
        type: Sequelize.STRING,
        primaryKey: true
    },
    price: Sequelize.INTEGER,
});

Menu.sync();

module.exports= Menu;