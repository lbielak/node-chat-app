var socket = io();

socket.on('connect', function() {
	console.log('Connected to server');

	socket.emit('createMessage', {		// emit here to make sure socket connected before emit
		from: 'thanhbui@example.com',
		text: 'Hey. This is Thanh.'
	});
});

socket.on('disconnect', function() {
	console.log('Disconnected from server');
});

socket.on('newMessage', function(message) {
	console.log('newMessage', message);
});
