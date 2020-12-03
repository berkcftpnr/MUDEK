const mysql = require("mysql");
const dbConnectionConfig = require("../config/config.db.js");

// Create a connection to the database
const connection = mysql.createConnection({
  host: dbConnectionConfig.HOST,
  user: dbConnectionConfig.USER,
  password: dbConnectionConfig.PASSWORD,
  database: dbConnectionConfig.DB
});

// open the MySQL connection
connection.connect(error => {
  if (error) {
    console.log("There have been an error while connecting the database:\nDetails:\n\t" + error.message);
    process.exit(1);
  };
  console.log("Successfully connected to the database.");
});

module.exports = connection;