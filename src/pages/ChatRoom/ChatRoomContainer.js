import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";

import ChatRoomComponent from "./components/ChatRoomComponent";

import messages from "../../../src/api/chat_data.json";



const ChatRoomContainer = () => {
	let socket = null;
	useEffect(() => {
		socket = io("http://localhost:3030", {
			reconnectionDelayMax: 10000,
		});

		socket.on("allMessage", message => {
			console.log('[allMessage]:', message)
		});

		socket.on("newMessage", message => {
			console.log('[newMessage]:', message)
		})

	}, []);

	const sendMessage = message => {
		if (socket && message) {
			socket.emit('sendMessage', {
				"id": "max520",
				"message": message
			})
		}
	}

	const props = {
		messages,
		sendMessage
	}

	return (
		<>
			<ChatRoomComponent {...props} />
		</>
	)
}

export default ChatRoomContainer;