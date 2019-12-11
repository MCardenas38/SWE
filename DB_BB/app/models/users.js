var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

var Users= sequelize.define("users",{
    user_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    u_name: Sequelize.STRING,
    username: Sequelize.STRING,
    u_password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    u_role: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

Users.sync();

module.exports = Users;