var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

var Registered= sequelize.define("registereds",{
    customer_id: Sequelize.INTEGER,
    customer_name: Sequelize.STRING,
    restaurant_name:{ 
        type: Sequelize.STRING,
        primaryKey: true
    },
    approval: Sequelize.BOOLEAN,
});

Registered.sync();

module.exports = Registered;