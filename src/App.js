import React from "react";

import ChatRoomContainer from "./pages/ChatRoom/ChatRoomContainer";

import "./App.scss";

const App = () => {
	return (
		<div className="app-container">
			<div className="opration-area">

			</div>
			<div className="present-area">
				<ChatRoomContainer />
			</div>
		</div>
	)
}

export default App;