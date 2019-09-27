import React, { useState } from 'react';

import classes from './ContactData.module.css';
import Input from './Input';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import { updateObj, checkValidity } from './utility';
import Form from './Form';

const ContactData = (props) => {
	const [controls, setControls] = useState({
		name: {
			elType: 'input',
			elConfig: {
				type: 'text',
				placeholder: 'Your Name'
			},
			value: '',
			validation: {
				required: true
			},
			valid: false,
			touched: false
		},
		street: {
			elType: 'input',
			elConfig: {
				type: 'text',
				placeholder: 'Street'
			},
			value: '',
			validation: {
				required: true
			},
			valid: false,
			touched: false
		},
		zipCode: {
			elType: 'input',
			elConfig: {
				type: 'text',
				placeholder: 'ZIP Code'
			},
			value: '',
			validation: {
				required: true,
				minLength: 4,
				maxLength: 5
			},
			valid: false,
			touched: false
		},
		country: {
			elType: 'input',
			elConfig: {
				type: 'text',
				placeholder: 'Country'
			},
			value: '',
			validation: {
				required: true
			},
			valid: false,
			touched: false
		},
		email: {
			elType: 'input',
			elConfig: {
				type: 'email',
				placeholder: 'Your E-Mail'
			},
			value: '',
			validation: {
				required: true,
				isEmail: true
			},
			valid: false,
			touched: false
		},
		deliveryMethod: {
			elType: 'select',
			elConfig: {
				options: [
					{ value: 'fastest', displayValue: 'Fastest' },
					{ value: 'cheapest', displayValue: 'Cheapest' }
				]
			},
			value: 'fastest',
			validation: {},
			valid: true
		}
	});
	const [formIsValid, setFormIsValid] = useState(false);

	// const handleInputChanged = (e, controlName) => {
	// 	// const properties = { value: e.target.value };
	// 	// const rules = controls[controlName].validation;

	// 	// const updatedControls = updateObj(controls, {
	// 	// 	[controlName]: updateObj(controls[controlName], {
	// 	// 		value: e.target.value,
	// 	// 		valid: checkValidity(properties, rules),
	// 	// 		touched: true
	// 	// 	})
	// 	// })
	// 	// setControls(updatedControls);

	// 	// let formIsValid = true;
	// 	// for (let controlName in updatedControls) {
	// 	// 	formIsValid = updatedControls[controlName].valid && formIsValid;
	// 	// }
	// 	// setFormIsValid(formIsValid);
	// };

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log('hello');
		// const contactData = {};
		// for (let key in controls) {
		// 	contactData[key] = controls[key].value;
		// }
		// console.log(contactData);
	};

	const formElArr = [];
	for (let key in controls) {
		formElArr.push({
			id: key,
			config: controls[key]
		});
	}

	let form = (
		<form onSubmit={ handleSubmit }>
			<Input
				type="text"
				name="fullName"
				label="Full Name"
				validate={ ['required', 'min'] }
				refs="name"
			// value={ formEl.config.value }
			// invalid={ !formEl.config.valid }
			// shouldValidate={ formEl.config.validation }
			// touched={ formEl.config.touched }
			// changed={ (e) => handleInputChanged(e, formEl.id) }
			/>
			<Input
				type="text"
				name="age"
				label="age"
				validate={ ['required'] }
			/>
			<Button btnType='Success'>
				SUBMIT
			</Button>
		</form>
	);

	if (props.loading) {
		form = <Spinner />;
	}

	return (
		<div className={ classes.ContactData }>
			<h4>Enter your Contact Data</h4>
			{ form }
		</div>
	);
};

export default ContactData;
