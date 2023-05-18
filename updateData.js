var express = require("express");
var router = express.Router();
var mysql = require("mysql2");
var pool = require("./mysqlModule");
var cors = require("cors");
router.put("/update/:id", function (req, res) {
  var data = req.body;
  var id = req.params.id;
  console.log(data)
  console.log(id);
  var sql =
    "update hary set   name=?, email=?, password=? where id = ?" ;
  var con = mysql.createConnection(pool);
  con.connect(function (err) {
    con.query(
      sql,
      [
        
        data.name,
        data.email,
        data.password,
       
        id,
      ],
      function (err, rows, metadata) {
        console.log(rows)
        let r = {};
        if (err) {
          console.log(err);
          r.status = "fail";
        } else {
          if (rows.affectedRows > 0) {
            r.status = "success";
            r.message = `Data update for id :${id}`;
          } else {
            r.status = "fail";
            r.message = `Data not found  for id :${id}`;
          }
        }
        console.log(rows);
        var data = { list: rows };
        res.json(data);
        // res.json(r);
      }
    );
  });
});

module.exports = router;