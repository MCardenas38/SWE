To run the website you will need to download MAMP and MY SQLWorkbench with the links below 

https://www.mamp.info/en/downloads/

https://dev.mysql.com/downloads/workbench/


After downloading MAMP and MY SQLWorkbench 

1.Open up MAMP and start server

2.Open up MY SQLWorkbench, setup a new database: default password is "root"

In Github go to the master branch of the repo

3.Open up the DB_BB file and copy the content of DBTest.sql  

4. Paste the content of DBTest.sql into the file of MY SQLWorkbench and click the lightening button to run it, now you have successfully setup the backend

5. Open up your terminal, cd into where the git repo file is, path: "C:\..\SWE"
- install npm package by running "npm i"
- after installing run the website by the command "npm start"
- this command will open up a browser linking to localhost:3000 and you should see the login page

6. Open up another terminal, cd into where the git repo file is, path: "C:\..\SWE\DB_BB"
- make sure MAMP is on and run the command "node server.js" to start the database

Customer
  -Creates Order
  -Registers for Restaurant
 
