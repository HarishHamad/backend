var express = require("express");
var router = express.Router();
var mysql = require("mysql2");
var pool = require("./mysqlModule");
var cors = require("cors");

// var CorsOption = {
//     origin:'http://example.com',
//     optionSuccessStatus:200
// }
router.post("/save", function (req, res) {
  var email = req.body.email;   
  var name = req.body.name;
  var password = req.body.password;
  var id = req.body.id;
  

  console.log(email);
  var sql =
    "insert into hary(id, name, email, password) values(?, ?, ?, ?)";

  var params = [id, name, email, password];
  var con = mysql.createConnection(pool);
  con.connect(function (err) {
    con.query(sql, params, function (err, rows, metadata) {
      console.log(rows);
      con.end();
      var data = {result : rows};
      res.json(data);
    });
  });
});

module.exports = router;