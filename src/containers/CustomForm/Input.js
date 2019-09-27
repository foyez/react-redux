import React, { useState } from 'react';

import classes from './Input.module.css';
import { updateObj, checkValidity } from './utility';

const Input = (props) => {
	let inputEl = null;
	const [error, setError] = useState('');
	const [values, setValues] = useState({});

	const handleInputChanged = (e) => {
		console.log(e.target.value);
		setValues({ ...values, [props.name]: e.target.value });
		const resError = checkValidity({ value: e.target.value }, props.validate);
		setError(resError);
	}

	console.log(values);
	const inputClasses = error ? [classes.InputEl, classes.Invalid] : [classes.InputEl];

	switch (props.type) {
		case 'text':
		case 'number':
		case 'email':
		case 'password':
			inputEl = (
				<input
					className={ inputClasses.join(' ') }
					{ ...props }
					onChange={ handleInputChanged }
				/>
			);
			break;
		// case 'textarea':
		// 	inputEl = (
		// 		<textarea
		// 			className={ inputClasses.join(' ') }
		// 			{ ...props }
		// 			onChange={ handleInputChanged }
		// 		/>
		// 	);
		// 	break;
		// case 'select':
		// 	inputEl = (
		// 		<select
		// 			className={ inputClasses.join(' ') }
		// 			value={ props.value }
		// 			onChange={ handleInputChanged }>
		// 			{ props.elConfig.options.map((option) => (
		// 				<option key={ option.value } value={ option.value }>
		// 					{ option.displayValue }
		// 				</option>
		// 			)) }
		// 		</select>
		// 	);
		// 	break;
		default:
			inputEl = (
				<input
					className={ inputClasses.join(' ') }
					{ ...props }
					onChange={ handleInputChanged }
				/>
			);
	}

	return (
		<div className={ classes.Input }>
			<label className={ classes.Label }>{ props.label }</label>
			{ inputEl }
			{ error && <span>{ error }</span> }
		</div>
	);
};

export default Input;
