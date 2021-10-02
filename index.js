const PORT = process.env.PORT || 3000;

const express = require('express');
const http = require('http');

const app = express();
app.use(express.static('public'));
const server = http.createServer(app);

server.listen(PORT, () => {
	console.log('listening on port: 3000');
});

const io = require('socket.io')(server);

io.on('connection', (socket) => {
	console.log('a user connected');

	socket.on('message', (message) => {
		console.log(message);
		io.emit('message', message);
	})
})

