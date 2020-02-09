var express = require('express');
var request = require('request');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	console.log(req);
	request('http://worldtimeapi.org/api/timezone/America/Toronto', function (error, response, body) {
		console.error('error:', error); // Print the error if one occurred
		console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
		console.log('body:', body); // Print the HTML for the Google homepage.

		if (error!=null || body==null) {
			res.send('failed to get time');
			return;
		} 
		
		res.send(body);
		
	});
});

module.exports = router;
