var express = require("express");
var router = express.Router();
var mysql = require("mysql2");
var pool = require("./mysqlModule");
var jwt = require("jsonwebtoken");
const secretkey = "secretkey";
router.post("/loginPage", function (req, res) {
  var email = req.body.email;
  var password = req.body.password;
  console.log(email);
  const token = jwt.sign({ email }, secretkey, { expiresIn: "30m" });
var params = [email,password];
  var sql = "select * from hary where email = ? and password = ?";

  var con = mysql.createConnection(pool);
  con.connect(function (err) {
    if (err) {
      console.log("error is coming");
      console.log(err.code);
      console.log(err.fatal);
      console.log(err);
      return;
    }

    con.query(sql, params, function (err, rows, metadata) {
      console.log(rows);
      con.end();
      console.log(token);
      var data = { result: rows };
      res.json({ data, token });
    });
  });
});

module.exports = router;
