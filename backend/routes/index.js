var express = require('express');
var router = express.Router();

const hello = () => {
  console.log('Hello Next()')
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Violet's Server" });
  next()
}, hello);

module.exports = router;
