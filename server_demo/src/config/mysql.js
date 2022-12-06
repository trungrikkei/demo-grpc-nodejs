var mysql = require('mysql');

var con = mysql.createPool({
    host: "103.200.23.188",
    user: "lichite1_grpc_demo",
    password: "lichitech@123",
    database: "lichite1_user_demo"
  });

module.exports = con;