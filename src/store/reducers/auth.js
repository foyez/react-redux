import * as actionTypes from '../actions/actionTypes';
import { updateObj } from '../../shared/utility';

const initialState = {
	token: null,
	isAuthenticated: false,
	// isLoading: false,
	isLoading: true,
	user: null
};

const authReducer = (state = initialState, action = {}) => {
	switch (action.type) {
		// case actionTypes.AUTH_LOADING:
		// 	return updateObj(state, {
		// 		isLoading: true
		// 	})
		case actionTypes.AUTH_SUCCESS:
			return updateObj(state, {
				isAuthenticated: true,
				isLoading: false,
				token: action.token,
				user: action.user
			})
		case actionTypes.LOGIN_SUCCESS:

			return {
				...state,
				token: action.token,
				user: action.user,
				isAuthenticated: true,
				isLoading: false
			}
		case actionTypes.AUTH_FAIL:
		case actionTypes.LOGIN_FAIL:
		case actionTypes.LOGOUT_SUCCESS:
			localStorage.removeItem('token');
			return updateObj(state, {
				token: null,
				isAuthenticated: false,
				user: null,
				isLoading: false
			})
		default:
			return state;
	}
}

export default authReducer;