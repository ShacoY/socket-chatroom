// var socket = io();

// socket.on('connect', function () {
// 	console.log('Conncted to socket.io server!');
// });


// socket.on('message', function(message) {
// 		console.log("new Message: " );
// 		console.log(message.text);
// 		//selector id #, tagname just tyep tagname class start with .
// 		//$('.messages').append('<p>' + message.text + '</p>');
	
// 	});

// // Handles submitting of new message
// //selector pick an element out of html
// var $form = $('#message-form');

// $form.on('submit', function(event) {
// 	event.preventDefault();

// 	var $message =$form.find('input[name=message]');
// 	socket.emit('message', {
// 		//select any input tags have a name attribut ===message
// 		//.val() pull value out and return as a String
// 		text: $message.val()
// 	});
// 	$message.val('');
// });
var name = getQueryVariable("name") || 'Anonymous';
var room = getQueryVariable("room");

var socket = io();

socket.on('connect', function () {
	console.log('Conncted to socket.io server!!!!');
});

socket.on('message', function (message) {
	console.log('New message:');
	console.log(message.text);
	$('.messages').append('<p>' +message.name + '</p>');
	$('.messages').append('<p>' +message.text + '</p>');
});

// Handles submitting of new message
var $form = jQuery('#message-form');

$form.on('submit', function (event) {
	event.preventDefault();

	var $message = $form.find('input[name=message]');

	socket.emit('message', {
		name: name,
		text: $message.val()
	});

	$message.val('');
});