var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('terminal', { title: 'Webshell', bundle: '/bundle'});
});

module.exports = router;
