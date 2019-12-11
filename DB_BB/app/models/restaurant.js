var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

var Restaurant= sequelize.define("restaurants",{
    restaurant_name:{
        type:Sequelize.STRING,
        primaryKey: true
    },
    manager_id: Sequelize.INTEGER,
    address: Sequelize.STRING,
    img_src: Sequelize.STRING
});

Restaurant.sync();

module.exports= Restaurant;