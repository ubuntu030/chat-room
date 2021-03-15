import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import "./chatRoom.scss";

const ChatRoomComponent = props => {
	const { messages, sendMessage } = props;
	return (
		<div className="chat-room-container">
			<MessageArea messages={messages} />
			<TypingArea sendMessage={sendMessage} />
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

const TypingArea = ({ sendMessage }) => {
	const [value, setValue] = useState('');
	const handleClick = () => {
		sendMessage(value);
		setValue('');
	}
	return (
		<div className="type-ctn">
			<textarea className="text-input" type="text"
				value={value} onChange={e => setValue(e.target.value)} />
			<button className="text-send" onClick={handleClick}>send</button>
		</div>
	)
}

const createPiecesOfMessage = messages => {
	const elms = messages.map(item => {
		return (
			<li key={uuidv4()} className={item.id === 'max520' ? 'right' : ''}>
				<div className="avatar">
					{item.id}
				</div>
				<div className="message">
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