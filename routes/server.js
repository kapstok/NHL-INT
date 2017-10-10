var express = require('express');
//var path = require('path');
var bodyParser = require('body-parser');
var router = express.Router();

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/form", function (req, res) {
    console.log(req.body.user.name);
});

module.exports = router;
