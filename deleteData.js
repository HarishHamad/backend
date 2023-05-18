var express = require("express");
var router = express.Router();
var mysql = require("mysql2");
var pool = require("./mysqlModule");
router.get("/delete/:id", function (req, res) {
  var id = req.params.id;
  // var password = req.body.password;
  console.log(id); 
  var sql = "delete FROM hary where id= "+id;
  var con = mysql.createConnection(pool);
  con.connect(function (err) {
    con.query(sql,function (err, rows, metadata) {
      console.log(rows);
      con.end();
       var data = {list : rows};
       res.json(data);
    });

    
  });
});


module.exports = router;