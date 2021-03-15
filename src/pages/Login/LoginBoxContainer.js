import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// action creators
import { setIsShowLogin, settingUser } from "../../state/login/loginReducer";
// selector
import { getIsShowLogin, getUserInfo } from "../../state/login/loginReducer";
import LoginBoxComponent from "./components/LoginBoxComponent";

const LoginBoxContainer = () => {
	const dispatch = useDispatch();
	const userInfo = useSelector(getUserInfo);
	const isShowLogin = useSelector(getIsShowLogin);
	const dispatchIsShowLogin = isShow => {
		dispatch(setIsShowLogin(isShow));
	}
	const dispatchSettingUser = info => {
		dispatch(settingUser(info));
	}

	const props = {
		dispatchIsShowLogin,
		dispatchSettingUser,
		userInfo: userInfo,
		isShowLogin: isShowLogin
	}
	return (
		<>
			<LoginBoxComponent {...props} />
		</>
	)
}

export default LoginBoxContainer;