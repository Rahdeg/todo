const mysql = require("mysql2");




const connection = mysql.createPool({
  host:"us-cdbr-east-05.cleardb.net",
  user:"b45d4a3a95ce16",
  password:"84325fa4",
  database:"heroku_18600984b8f4fdb"
})




module.exports = connection;
