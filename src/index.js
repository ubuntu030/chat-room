import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./state/store";
import App from "./App";
import "./style.scss";

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
)