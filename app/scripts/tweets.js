var Twit = require('twit');
var config = require('../config');

T.get('https://api.twitter.com/1.1/statuses/user_timeline.json?user_id=garrettdesigns&screen_name=garrettdesigns', function(err, data, response) {
		console.log(data);
})