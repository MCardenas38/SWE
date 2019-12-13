[![Build Status](http://img.shields.io/travis/badges/badgerbadgerbadger.svg?style=flat-square)](https://travis-ci.org/badges/badgerbadgerbadger)

# BinaryBites

Our application is intended for customers to have a faster and more convenient experience when ordering food online from a local restaurant. It sells a variety of foods such as their favorite orders and new orders. The application also alllows managers to grant registration for each guest user and start bidding for delivery. Sales people can add menu items they feel is in need to restock. Cooks can add and delete menu items.

### Navigation

#### Customer 
Visitors:
Do not need to login to the site, can pick a restaurant, and is directed to another page to order food from a menu. This user is given the choice to register and needs approval from manager in order to be an ordinary user.

Ordinary Customer/VIP Customer:
Once signed in, this user is given a list of restaurants to order from. Once selecting a restaurant, is redirected to another page, where they can order from the menu (and quantity). Once finished placing an order, can click order. When ordering food, they can see what their top 3 food items are above the menu.

#### Manager
Once signed in, allows the customers food to be placed into bidding for the delivery men. A manager is also given the option to allow a user to register to order from them.

#### Delivery 
Once signed in, delivery users are redirected to the bidding page, where they can bid the amount of delivery fee. The user who bids the lowest at a certain time is the one who will be delivering the food to the customer.

#### Cook:
Once signed in, is able to add or delete items on the menu.

#### Sales Person:
Can add supply and quantity to ingredients/food items needed for the restaurant to continue serving its food.



## DOWNLOAD BEFORE SETUP/RUNNING

To run the website you will need to download MAMP and MY SQLWorkbench with the links below 

https://www.mamp.info/en/downloads/

https://dev.mysql.com/downloads/workbench/


## Setup

Clone this repo to your local machine using https://github.com/MCardenas38/SWE.git


### Development server

1. Open up MAMP -> start server

2. Open up MySQL Workbench, setup a new database: default password is "root"

3. Open up the DB_BB file in ./SWE/DB_BB and copy the content of DBTest.sql  

4. Paste the content of DBTest.sql into the file of MY SQLWorkbench and click the lightening button to run it, now you have successfully setup the backend

5. Open up your terminal, cd into where the git repo file is, path: "C:\..\SWE"
> now install npm and start 

```shell
$ npm install
$ npm start
```

6. Open up another terminal, cd into where the git repo file is, path: "C:\..\SWE\DB_BB"
- ensure that MAMP is on and run the command ```$ node server.js``` to start the database

#### Example of VSCode and two terminals running
![VSCodeTerminals](https://i.imgur.com/sILQ7sh.png)
  
## Further help

To get more help on ReactJS visit their website and look at their Getting Started navigation: https://reactjs.org/docs/getting-started.html
 
## Team
Matthews Cardenas

Angelica Hernandez

William Li
