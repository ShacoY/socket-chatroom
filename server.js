var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
//start a new server and use express
//anything express listens to server should also listen to
var http = require('http').Server(app);

var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

io.on('connection', function (socket) {
	console.log('User connected via socket.io!');

	socket.on('message', function(message) {
		console.log("Message received: " + message.text);

		//send to everyone but urself
		//socket.broadcast.emit('message', message);
		//send to everyone include urself
		io.emit('message', message);
	});
	
	socket.emit('message', {
		text: "Welcome 2 the Chat Room"
	});
});



http.listen(PORT, function() {
	console.log("Server started!");
});

