import { io } from "socket.io-client";

const socket = io("http://localhost:3030", {
	reconnectionDelayMax: 10000,
});

socket.on("allMessage", message => {
	console.log('[allMessage]:', message)
});

socket.on("newMessage", message => {
	console.log('[newMessage]:', message)
});

export default socket;