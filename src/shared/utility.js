export const updateObj = (oldObj, updatedProperties) => {
	return {
		...oldObj,
		...updatedProperties
	};
};

export const sanitize = s => {
	return s
		.replace("&", "&amp;")
		.replace("<", "&lt;")
		.replace(">", "&gt;");
};

export const checkValidity = ({ value, ...rest }, rules) => {
	let error = undefined;

	if (!error && rules.required && value.trim() === '') {
		error = "This field is required";
	}

	if (!error && rules.isEmail) {
		const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
		error = !pattern.test(value) && `Invalid email address`;
	}

	if (!error && rules.isNumeric) {
		value = value.replace(/[^\d]/g, '')
		const pattern = /^\d+$/;
		error = !pattern.test(value) && 'Value should be number.';
	}

	if (!error && rules.minLength && value.length < rules.minLength) {
		error = `Length should be at least ${rules.minLength}`;
	}

	if (!error && rules.maxLength && value.length > rules.maxLength) {
		error = `Maximum length should be ${rules.maxLength}`;
	}

	if (!error && rules.isPassword) {
		// TODO - need to add password rules
		// At least 1 uppercase character.
		// At least 1 lowercase character.
		// At least 1 digit.
		// At least 1 special character.
		// Minimum 6 characters.
		const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{6,}$/;
		error = !pattern.test(value) && 'Invalid Password.';
	}

	if (!error && rules.isPassword2) {
		error = value !== rest.password && "Password didn't match."
	}

	if (!error && rules.phone) {
		// const onlyNums = value.replace(/[^\d]/g, '')
		// if (onlyNums.length <= 3) {
		// 	return onlyNums
		// }
		// if (onlyNums.length <= 7) {
		// 	return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3)}`
		// }
		// return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3, 6)}-${onlyNums.slice(
		// 	6,
		// 	10
		// )}`
	}

	if (!error && rules.url) {
		// const pattern = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
		// isValid = pattern.test(value) && isValid;
	}

	return { error, value };
}

// export const checkValidity = ({ value, ...rest }, rules) => {
// 	let isValid = true;

// 	if (!rules) {
// 		return true;
// 	}

// 	if (rules.required) {
// 		isValid = value.trim() !== '' && isValid;
// 	}

// 	if (rules.minLength) {
// 		isValid = value.length >= rules.minLength && isValid;
// 	}

// 	if (rules.maxLength) {
// 		isValid = value.length <= rules.maxLength && isValid;
// 	}

// 	if (rules.isEmail) {
// 		const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
// 		isValid = pattern.test(value) && isValid;
// 	}

// 	if (rules.isNumeric) {
// 		const pattern = /^\d+$/;
// 		isValid = pattern.test(value) && isValid;
// 	}

// 	if (rules.isPassword) {
// 		isValid = value.length >= 6 && isValid;

// 		// TODO - need to add password rules
// 		// At least 1 uppercase character.
// 		// At least 1 lowercase character.
// 		// At least 1 digit.
// 		// At least 1 special character.
// 		// Minimum 6 characters.
// 		const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{6,}$/;
// 		isValid = pattern.test(value) && isValid;
// 	}

// 	if (rules.isPassword2) {
// 		isValid = value === rest.password && isValid
// 	}

// 	if (rules.phone) {
// 		const onlyNums = value.replace(/[^\d]/g, '')
// 		if (onlyNums.length <= 3) {
// 			return onlyNums
// 		}
// 		if (onlyNums.length <= 7) {
// 			return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3)}`
// 		}
// 		return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3, 6)}-${onlyNums.slice(
// 			6,
// 			10
// 		)}`
// 	}

// 	if (rules.url) {
// 		// const pattern = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
// 		// isValid = pattern.test(value) && isValid;
// 	}

// 	return isValid;
// };
