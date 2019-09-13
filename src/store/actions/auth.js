import axios from '../../axios-auth';

import * as actionTypes from './actionTypes';

// CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) => {
	// Auth Loading
	// dispatch({ type: actionTypes.AUTH_LOADING })

	// Get token from store
	// const token = getState().auth.token;
	const token = localStorage.getItem('token');
	// Headers
	const config = {
		headers: {
			'Content-Type': 'application/json',
			// 'Authorization': `Token ${token}`
		}
	}

	if (token) {
		config.headers['Authorization'] = `Token ${token}`
	}
	axios.get('/api/auth/user', config)
		.then(res => {
			console.log(res.data)
			dispatch({
				type: actionTypes.AUTH_SUCCESS,
				token,
				user: res.data
			})
		})
		.catch(err => {
			dispatch({ type: actionTypes.AUTH_FAIL })
			console.log(err.response.data, err.response.status)
		})
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

// LOGOUT
export const logout = () => dispatch => {
	// Get token from store
	const token = localStorage.getItem('token');

	if (token) {
		// Headers
		const config = {
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Token ${token}`
			}
		}

		axios.post('/api/auth/logout', null, config)
			.then(res => {
				dispatch({
					type: actionTypes.LOGOUT_SUCCESS,
				})
			})
			.catch(err => {
				// dispatch({ type: actionTypes.AUTH_FAIL })
				console.log(err.response.data, err.response.status)
			})
	}
}