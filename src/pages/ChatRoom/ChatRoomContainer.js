import React, { useState } from "react";
import ChatRoomComponent from "./components/ChatRoomComponent";

import messages from "../../../src/api/chat_data.json";

const ChatRoomContainer = () => {
	const props = {
		messages
	}
	return (
		<>
			<ChatRoomComponent messages={messages} />
		</>
	)
}

export default ChatRoomContainer;