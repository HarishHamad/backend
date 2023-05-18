var express = require("express");
var router = express.Router();
var mysql = require("mysql2");
var pool = require("./mysqlModule");
router.get("/search", function (req, res) {
  var sql = "select * from hary";
  var con = mysql.createConnection(pool);
  con.connect((err) => {
    con.query(sql, (req, rows) => {
      console.log(rows);
      con.end;
      var data = {list : rows};
      res.json(data)
    });
  });
});
module.exports = router;