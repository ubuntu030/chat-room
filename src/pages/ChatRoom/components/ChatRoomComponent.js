import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import "./chatRoom.scss";

const ChatRoomComponent = props => {
	const { messages } = props;
	return (
		<div className="chat-room-container">
			<MessageArea messages={messages} />
			<TypingArea />
		</div>
	)
}

const MessageArea = ({ messages }) => {

	return (
		<div className="message-ctn">
			{createPiecesOfMessage(messages)}
		</div>
	)
}

const TypingArea = () => {
	return (
		<div className="type-ctn">
			<textarea className="text-input" type="text" />
			<button className="text-send">send</button>
		</div>
	)
}

const createPiecesOfMessage = messages => {
	const elms = messages.map(item => {
		return (
			<li key={uuidv4()} className={item.id === 'max520' ? 'right' : ''}>
				<div>
					{item.id}
				</div>
				<div>
					{item.message}
				</div>
			</li>
		)
	});

	return (
		<ul>
			{elms}
		</ul>
	)
}

export default ChatRoomComponent;