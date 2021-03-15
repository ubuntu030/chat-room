import React from "react";

import ChatRoomContainer from "./pages/ChatRoom/ChatRoomContainer";
import LoginBoxContainer from "./pages/Login/LoginBoxContainer";

import "./App.scss";

const App = () => {
	return (
		<div className="app-container">
			<LoginBoxContainer />
			<div className="opration-area">

			</div>
			<div className="present-area">
				<ChatRoomContainer />
			</div>
		</div>
	)
}

export default App;