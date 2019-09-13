import axios from '../../axios-auth';

import * as actionTypes from './actionTypes';

// CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) => {
	if (tokenConfig()) {
		axios.get('/api/auth/user', tokenConfig().config)
			.then(res => {
				dispatch({
					type: actionTypes.AUTH_SUCCESS,
					token: tokenConfig().token,
					user: res.data
				})
			})
			.catch(err => {
				dispatch({ type: actionTypes.AUTH_FAIL })
				// console.log(err.response.data, err.response.status)
			})
	} else {
		dispatch({ type: actionTypes.AUTH_FAIL })
	}
}

// LOGIN USER
export const login = (email, password) => dispatch => {
	// Headers
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};

	// Body
	const body = JSON.stringify({ email, password });

	axios
		.post('api/auth/login/', body, config)
		.then(res => {
			console.log(res.data)
			localStorage.setItem('token', res.data.token);

			dispatch({
				type: actionTypes.LOGIN_SUCCESS,
				token: res.data.token,
				user: res.data.user
			})
		})
		.catch(err => {
			console.log(err.response.data);
			dispatch({
				type: actionTypes.LOGIN_FAIL
			})
		})
}

// REGISTER USER
export const register = (newUser) => (dispatch) => {
	// Headers
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};

	// Request Body
	const body = JSON.stringify(newUser);

	axios
		.post('api/auth/register/', body, config)
		.then((res) => {
			localStorage.setItem('token', res.data.token);

			dispatch({
				type: actionTypes.REGISTER_SUCCESS,
				user: res.data.user,
				token: res.data.token
			});
		})
		.catch((err) => {
			dispatch({
				type: actionTypes.REGISTER_FAIL
			});
		});
};

// LOGOUT
export const logout = () => dispatch => {
	axios.post('api/auth/logout/', null, tokenConfig().config)
		.then(res => {
			dispatch({
				type: actionTypes.LOGOUT_SUCCESS,
			})
		})
		.catch(err => {
			// console.log(err.response.data, err.response.status)
			console.log(err);
		})
}

// Setup config with token - helper function
export const tokenConfig = () => {
	// Get token from local storage
	const token = localStorage.getItem('token');
	// Headers
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	}

	if (!token) {
		return null;
	}

	config.headers['Authorization'] = `Token ${token}`
	return { token, config };
}