import React, { useState } from 'react';

import classes from './ContactData.module.css';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import { updateObj, checkValidity } from '../../shared/utility';

const ContactData = (props) => {
	const [contactForm, setContactForm] = useState({
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

	const handleSubmit = (e) => {
		e.preventDefault();

		const formData = {};
		for (let formElIdentifier in contactForm) {
			formData[formElIdentifier] = contactForm[formElIdentifier].value.trim();
		}

		const order = {
			orderData: formData,
			userId: props.userId
		};

		console.log(order);
	};

	const handleInputChanged = (e, inputIdentifier) => {
		const updatedFormEl = updateObj(contactForm[inputIdentifier], {
			value: e.target.value,
			valid: checkValidity(
				e.target.value,
				contactForm[inputIdentifier].validation
			),
			touched: true
		});
		const updatedOrderForm = updateObj(contactForm, {
			[inputIdentifier]: updatedFormEl
		});

		let formIsValid = true;
		for (let inputIdentifier in updatedOrderForm) {
			formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
		}

		setContactForm(updatedOrderForm);
		setFormIsValid(formIsValid);
	};

	const formElArr = [];
	for (let key in contactForm) {
		formElArr.push({
			id: key,
			config: contactForm[key]
		});
	}

	let form = (
		<form onSubmit={ handleSubmit }>
			{ formElArr.map((formEl) => (
				<Input
					key={ formEl.id }
					elType={ formEl.config.elType }
					elConfig={ formEl.config.elConfig }
					value={ formEl.config.value }
					invalid={ !formEl.config.valid }
					shouldValidate={ formEl.config.validation }
					touched={ formEl.config.touched }
					changed={ (e) => handleInputChanged(e, formEl.id) }
				/>
			)) }
			<Button btnType='Success' disabled={ !formIsValid }>
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
