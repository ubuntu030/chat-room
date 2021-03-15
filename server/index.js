// https://www.valentinog.com/blog/socket-react/
// cors https://socket.io/docs/v3/handling-cors/
const fs = require('fs');
const cors = require('cors');
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server, {
	cors: {
		origin: "http://localhost:8080",
		methods: ["GET", "POST"]
	}
});

const API_PORT = 3000;
const SOCKET_PORT = 3030;

const index = require("./routes/index");

app.use(cors({
	origin: 'http://localhost:8080',
}));
app.use(index);

// API
app.listen(API_PORT, () => {
	console.log(`listening on *:${API_PORT}`);
});

// SOCKET
server.listen(SOCKET_PORT)

const messages = [];

io.on('connection', (socket) => {
	console.log('a user connected');
	// 用戶連線時發送歷史訊息
	io.emit("allMessage", messages)

	socket.on("sendMessage", message => {
		console.log(message)
		const newMessage = { ...message, "time": new Date().getTime() }
		messages.push(newMessage);
		io.emit("newMessage", newMessage);
	})

});