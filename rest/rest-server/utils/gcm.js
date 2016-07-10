var https = require('https');
var exports = module.exports = {};

exports.gcm = function(auth, message){
	var options = {
 	 hostname: 'android.googleapis.com',
	  port: 443,
 	 path: '/gcm/send',
 	 method: 'POST',
 	 headers: {
   	   'Content-Type': 'application/json',
		  'Authorization': 'key='+auth
	  }
	};
	console.log("test");
	var req = https.request(options, function(res) {
	  console.log('Status: ' + res.statusCode);
 	 console.log('Headers: ' + JSON.stringify(res.headers));
 	 res.setEncoding('utf8');
	  res.on('data', function (body) {
	    console.log('Body: ' + body);
	  });
	});
	req.on('error', function(e) {
	  console.log('problem with request: ' + e.message);
	});
	// write data to request body
	req.write('{"data": {"message": "'+message+'"}, "to": "/topics/global"}');
	req.end();
}
