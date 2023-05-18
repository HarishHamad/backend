var express = require("express");
var cors = require("cors");
var app = express();
var bodyParser = require("body-parser");
var jwt =require('jsonwebtoken');

app.use(bodyParser.urlencoded({extended : false }));
app.use(cors());

app.use(express.json())

app.use("/au",require("./Auth.js"));
app.use("/empRegisteration",require("./empData.js"));
app.use('/empGet',require('./getempData.js'));
app.use('/empEdit',require('./userEdit.js'));
app.use("/empSave",require('./updateData.js'));
app.use("/empDelete",require('./deleteData.js'));


    
app.listen(3308, () =>{
    console.log("server is running on port 3308 ");
});