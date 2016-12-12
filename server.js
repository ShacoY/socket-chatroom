var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
//start a new server and use express
//anything express listens to server should also listen to
var http = require('http').Server(app);

app.use(express.static(__dirname + '/public'));

http.listen(PORT, function() {
	console.log("Server started!");
});
