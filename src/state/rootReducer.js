import { combineReducers } from "redux";

import userReducer from "./user/userReducer";
import chatReducer from "./chat/chatReducer";
import loginReducer from "./login/loginReducer";

const rootReducer = combineReducers({
	user: userReducer,
	chat: chatReducer,
	login: loginReducer
});

export default rootReducer;