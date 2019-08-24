import * as actionTypes from '../actions/actionTypes';
import { updateObj } from '../../shared/utility';
import { authStart } from '../actions/auth';

const initialState = {
	token: null,
	userId: null,
	error: null,
	loading: null
};

const authStart = (state, action) =>
	updateObj(state, {
		error: null,
		loading: true
	});

const authSuccess = (state, action) =>
	updateObj(state, {
		token: action.token,
		userId: action.userId,
		error: null,
		loading: false
	});

const authFail = (state, action) =>
	updateObj(state, {
		error: action.error,
		userId: null
	});

const authLogout = (state, action) =>
	updateObj(state, {
		token: null,
		userId: null
	});

const reducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case actionTypes.AUTH_START:
			return authStart(state, action);
		case actionTypes.AUTH_SUCCESS:
			return authSuccess(state, action);
		case actionTypes.AUTH_LOGOUT:
			return authLogout(state, action);
		default:
			return state;
	}
};

export default reducer;
