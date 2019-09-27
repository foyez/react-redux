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

// export const composeValidators = (...validators) => value => validators.reduce((error, validator) => error || validator(value), undefined);
// console.log(composeValidators);

export const checkValidity = ({ value, ...rest }, rules) => {
	// console.log(rules);
	// let error = '';

	// if (!rules) {
	// 	return true;
	// }

	if (rules.includes('required')) {
		if (value.trim() === '') {
			return "Required";
		}
	}

	if (rules.includes('min')) {
		if (value.length < 6) return "Length should be at least 6.";
	}

	// if (rules.maxLength) {
	// 	isValid = value.length <= rules.maxLength && isValid;
	// }

	// if (rules.isEmail) {
	// 	const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
	// 	isValid = pattern.test(value) && isValid;
	// }

	// if (rules.isNumeric) {
	// 	const pattern = /^\d+$/;
	// 	isValid = pattern.test(value) && isValid;
	// }

	// if (rules.isPassword) {
	// 	isValid = value.length >= 6 && isValid;

	// 	// TODO - need to add password rules
	// 	// At least 1 uppercase character.
	// 	// At least 1 lowercase character.
	// 	// At least 1 digit.
	// 	// At least 1 special character.
	// 	// Minimum 6 characters.
	// 	const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{6,}$/;
	// 	isValid = pattern.test(value) && isValid;
	// }

	// if (rules.isPassword2) {
	// 	isValid = value === rest.password && isValid
	// }

	// if (rules.phone) {
	// 	const onlyNums = value.replace(/[^\d]/g, '')
	// 	if (onlyNums.length <= 3) {
	// 		return onlyNums
	// 	}
	// 	if (onlyNums.length <= 7) {
	// 		return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3)}`
	// 	}
	// 	return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3, 6)}-${onlyNums.slice(
	// 		6,
	// 		10
	// 	)}`
	// }

	// if (rules.url) {
	// 	// const pattern = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
	// 	// isValid = pattern.test(value) && isValid;
	// }

	return undefined;
};
