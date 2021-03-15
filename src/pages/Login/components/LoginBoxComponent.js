import React, { useState } from "react";

import "./loginBox.scss";

const LoginBoxComponent = (props) => {
	const {
		dispatchIsShowLogin,
		dispatchSettingUser,
		userInfo,
		isShowLogin
	} = props;
	const [name, setName] = useState('max520');
	const handleClick = () => {
		dispatchSettingUser({
			id: '',
			name: name
		});
		dispatchIsShowLogin(false);
		setName('');
	}
	const isDisplay = (isShowLogin || !userInfo.name) ? true : false;
	return (
		isDisplay ?
			<section className="login-box-container">
				<div className="login-box-card">
					<h1>設定名稱</h1>
					<div className="input-field">
						<div className="name">
							<label>NAME:</label>
							<input type="text" value={name}
								onChange={e => setName(e.target.value)} />
						</div>
					</div>
					<div className="control-field">
						<button onClick={handleClick} className="send">OK!</button>
					</div>
				</div>
			</section> : null
	)
}

export default LoginBoxComponent;