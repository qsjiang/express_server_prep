var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var stylesheets = [
	];
	var scripts = [
		"/javascripts/details.js"
	];
  res.render('details', { 
  	title: 'Express', 
  	layout:"layout", 
  	value:"value passed down from server",
  	scripts: scripts
  });
});

module.exports = router;
