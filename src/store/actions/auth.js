import * as actionTypes from './actionTypes';

export const authStart = () => ({
	type: actionTypes.AUTH_START
});

export const authSuccess = (token, userId) => ({
	type: actionTypes.AUTH_SUCCESS,
	token,
	userId
});

export const authFail = (error) => ({
	type: actionTypes.AUTH_FAIL,
	error
});
