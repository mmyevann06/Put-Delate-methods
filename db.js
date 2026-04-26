const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "shop"
});

db.connect((err) => {
  if (err) console.log(err);
  else console.log("MySQL Connected");
});

module.exports = db;