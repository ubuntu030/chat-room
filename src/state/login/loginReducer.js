import { SETTING_USER, IS_SHOW_LOGIN } from "./loginActions";

const initialState = {
	id: '',
	name: '',
	loading: false,
	isShowLogin: false
};

// Reducer
const loginReducer = (state = initialState, action) => {
	const { payload } = action;
	switch (action.type) {
		case SETTING_USER: {
			return { ...state, name: payload.name }
		}
		case IS_SHOW_LOGIN: {
			return { ...state, isShowLogin: payload }
		}
		default:
			return state
	}
}

// Action Creator
export const settingUser = info => {
	return {
		type: SETTING_USER,
		payload: info
	}
}

export const setIsShowLogin = isShow => {
	return {
		type: IS_SHOW_LOGIN,
		payload: isShow
	}
}

// Selector
export const getUserInfo = state => ({ id: state.login.id, name: state.login.name });
export const getIsShowLogin = state => {
	return state.login.isShowLogin
};

export default loginReducer;