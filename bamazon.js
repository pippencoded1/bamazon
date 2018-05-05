var prompt = require('prompt');
var mysql = require('mysql');

prompt.start();

prompt.get(['product_id', 'units'], function (err, results){



});

var connection = mysql.createConnection({
    host: "localhost",
   
    // Your username
    user: "root",
   
    // Your password

    database: "bamazon"
   });
   
   connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    afterConnection();
   });
   
   function afterConnection() {
    connection.query("SELECT * FROM Products" , function(err, res) {
      if (err) throw err;
      console.log(res);
      connection.end();
    });
   
   }