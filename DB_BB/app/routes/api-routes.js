// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Sequelize = require("sequelize");
var Users = require("../models/users");
var Registered = require("../models/registered");
var Restaurant = require("../models/restaurant");
var Menu= require("../models/menu");
var Order= require("../models/order");
var Supply= require("../models/supply");

const Op = Sequelize.Op;

// Routes
// =============================================================
module.exports = function(app){
    app.get("/api/login",function(req,res){
        Users.findOne({
            where: {
              username: req.query.username,
              u_password: req.query.u_password
            }
          }).then(function(results) {
            res.json(results);
        });
    });

    app.get("/api/restaurant_name",function(req,res){
      Restaurant.findOne({
          where: {
            manager_id: req.query.manager_id
          }
        }).then(function(results) {
          res.json(results);
      });
    });

    app.get("/api/approval_list",function(req,res){
      Registered.findAll({
          where: {
            restaurant_name: req.query.restaurant_name,
            approval: {
              [Op.is]: null 
            }
          }
        }).then(function(results) {
          res.json(results);
      });
    });

    app.get("/api/restaurant_list",function(req,res){
      Restaurant.findAll().then(function(results) {
          res.json(results);
      });
    });

    app.get("/api/menu",function(req,res){
      Menu.findAll({
        where: {
          restaurant_name: req.query.restaurant_name
        }
      }).then(function(results) {
          res.json(results);
      });
    });

    app.get("/api/orders",function(req,res){
      Order.findAll({
        where: {
          customer_id: req.body.customer_id
        }
      }).then(function(results) {
          res.json(results);
      });
    });

    app.get("/api/bids_start",function(req,res){
      Order.findAll({
        where: {
          restaurant_name: req.query.restaurant_name,
          bid_start: 0
        }
      }).then(function(results) {
          res.json(results);
      });
    });

    app.get("/api/delivery",function(req,res){
      Order.findAll({
        where: {
          bid_start: 1,
          bid_end: 0
        }
      }).then(function(results) {
          res.json(results);
      });
    });

    app.get("/api/your/delivery",function(req,res){
      Order.findAll({
        where: {
          bid_start: 1,
          bid_end: 1,
          delivery_id: req.query.delivery_id
        }
      }).then(function(results) {
          res.json(results);
      });
    });

    app.put("/api/delivery/bid",function(req,res){
      console.log(req);
      Order.update({
        delivery_id: req.body.delivery_id,
        bid_price: req.body.bid_price
      }, {
        where: {
          order_id:  req.body.order_id,
          bid_start: 1,
          bid_end: 0
         } 
      })
        .then(updatedMax => {
            console.log(updatedMax);
            res.end();
        })
      res.end();
    });

    app.get("/api/bids_end",function(req,res){
      Order.findAll({
        where: {
          restaurant_name: req.query.restaurant_name,
          bid_start: 1,
          bid_end: 0
        }
      }).then(function(results) {
          res.json(results);
      });
    });

    app.get("/api/bids_complete",function(req,res){
      Order.findAll({
        where: {
          restaurant_name: req.query.restaurant_name,
          bid_start: 1,
          bid_end: 1
        }
      }).then(function(results) {
          res.json(results);
      });
    });

    app.post("/api/process_order",function(req,res){
        Order.create({
            customer_id: req.body.customer_id,
            price: req.body.price,
            restaurant_name: req.body.restaurant_name,
            bid_start: req.body.bid_start,
            bid_price: req.body.bid_price
        }).then(()=>{
            console.log("Success");
            res.end();
        })
    });

    app.put("/api/approval_list",function(req,res){
      console.log(req);
      Registered.update({
        approval: req.body.approval
      }, {
        where: { 
          customer_id: req.body.customer_id,
          restaurant_name: req.body.restaurant_name
         } 
      })
        .then(updatedMax => {
            console.log(updatedMax);
            res.end();
        })
      res.end();
    });

    app.put("/api/start_bid",function(req,res){
      Order.update({
        bid_start: 1,
      }, {
        where: {
          order_id:  req.body.order_id
         } 
      })
        .then(updatedMax => {
            console.log(updatedMax);
            res.end();
        })
      res.end();
    });

    app.put("/api/end_bid",function(req,res){
      console.log(req);
      Order.update({
        bid_end: 1
      }, {
        where: {
          order_id:  req.body.order_id
         } 
      })
        .then(updatedMax => {
            console.log(updatedMax);
            res.end();
        })
      res.end();
    });

    app.get("/api/supply",function(req,res){
      Supply.findAll({
          where: {
            restaurant_name: req.query.restaurant_name
          }
        }).then(function(results) {
          console.log(results);
          res.json(results);
      });
    });

    app.post("/api/register", function (req, res) {
      console.log(req);
      Users.create({
        u_name: req.query.u_name,
        username: req.query.username,
        u_password: req.query.u_password
      }).then(function (results) {
        res.json(results);
      });
    });

    app.get("/api/restaurant_name_cook", function (req, res) {
      Restaurant.findOne({
        where: {
          cook_id: req.query.cook_id
        }
      }).then(function (results) {
        res.json(results);
      });
    });
  
    app.get("/api/restaurant_name_sales",function(req,res){
        Restaurant.findOne({
            where: {
              salesperson_id: req.query.salesperson_id
            }
          }).then(function(results) {
            res.json(results);
        });
      });

    app.delete("/api/remove_menu", function (req, res) {
      console.log(req);
      Menu.destroy({
        where: {
          food_id: req.query.food_id
        }
      }).then(function (results) {
        res.json(results);
      });

      app.get("/api/restaurant_name_cook",function(req,res){
        Restaurant.findOne({
            where: {
              cook_id: req.query.cook_id
            }
          }).then(function(results) {
            res.json(results);
        });
      });
    });
  
    app.post("/api/menu_add", function (req, res) {
      console.log(req);
      Menu.create({
        food_name: req.body.food_name,
        restaurant_name: req.body.restaurant_name,
        price: req.body.price
      }).then(function (results) {
        res.json(results);
      });
    });
  
    app.post("/api/supply_add", function (req, res) {
      console.log(req);
      Supply.create({
        supply_name: req.body.supply_name,
        restaurant_name: req.body.restaurant_name,
        supply_price: req.body.supply_price
      }).then(function (results) {
        res.json(results);
      });
    });

    app.put("/api/food_count",function(req,res){
      console.log(req);
      Menu.update({
        food_count: req.body.food_count
      }, {
        where: {
          food_id: req.body.food_id
         } 
      })
        .then(updatedMax => {
            console.log(updatedMax);
            res.end();
        })
      res.end();
    });

    app.get("/api/top_3",function(req,res){
      Menu.findAll({
          order: [
            ['food_count', 'DESC']
          ]
        }).then(function(results) {
          res.json(results);
      });
    });

    app.get("/api/restaurant_reg",function(req,res){
      Registered.findOne({
          where: {
            restaurant_name: req.query.restaurant_name,
            customer_id: req.query.customer_id,
          }
        }).then(function(results) {
          res.json(results);
      });
    });

    app.post("/api/restaurant_reg", function (req, res) {
      Registered.create({
        customer_id: req.body.customer_id,
        customer_name: req.body.customer_name,
        restaurant_name: req.body.restaurant_name,
      }).then(function (results) {
        res.json(results);
      });
    });

  };
