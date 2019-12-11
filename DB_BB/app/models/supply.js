var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

var Supply= sequelize.define("supplies",{
    supply_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    supply_name: Sequelize.STRING,
	restaurant_name: Sequelize.STRING,
    supply_price: Sequelize.INTEGER,
});

Supply.sync();

module.exports= Supply;