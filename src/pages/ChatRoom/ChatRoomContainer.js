import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";

import ChatRoomComponent from "./components/ChatRoomComponent";

import messages from "../../../src/api/chat_data.json";



const ChatRoomContainer = () => {
	useEffect(() => {
		const socket = io("http://localhost:3030", {
			reconnectionDelayMax: 10000,
		});
	}, []);

	return (
		<>
			<ChatRoomComponent messages={messages} />
		</>
	)
}

export default ChatRoomContainer;