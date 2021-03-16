import React, { useState, useEffect } from "react";
import socket from "../../socket";

import ChatRoomComponent from "./components/ChatRoomComponent";

import messages from "../../../src/api/chat_data.json";



const ChatRoomContainer = () => {
	useEffect(() => {

		console.log(socket);
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