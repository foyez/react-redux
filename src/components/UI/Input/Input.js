import React from 'react';

import classes from './Input.module.css';

const Input = (props) => {
	let inputEl = null;
	const inputClasses = [classes.InputEl];

	if (props.error) {
		inputClasses.push(classes.Invalid);
	}

	switch (props.elType) {
		case 'input':
			inputEl = (
				<input
					className={ inputClasses.join(' ') }
					{ ...props.elConfig }
					value={ props.value }
					onChange={ props.changed }
					onBlur={ props.changed }
				/>
			);
			break;
		case 'textarea':
			inputEl = (
				<textarea
					className={ inputClasses.join(' ') }
					{ ...props.elConfig }
					value={ props.value }
					onChange={ props.changed }
					onBlur={ props.changed }
				/>
			);
			break;
		case 'select':
			inputEl = (
				<select
					className={ inputClasses.join(' ') }
					value={ props.value }
					onChange={ props.changed }>
					{ props.elConfig.options.map((option) => (
						<option key={ option.value } value={ option.value }>
							{ option.displayValue }
						</option>
					)) }
				</select>
			);
			break;
		default:
			inputEl = (
				<input
					className={ inputClasses.join(' ') }
					{ ...props.elConfig }
					value={ props.value }
					onChange={ props.changed }
					onBlur={ props.changed }
				/>
			);
	}

	return (
		<div className={ classes.Input }>
			<label className={ classes.Label }>{ props.label }</label>
			{ inputEl }
			{ props.error && <span>{ props.error }</span> }
		</div>
	);
};

export default Input;
