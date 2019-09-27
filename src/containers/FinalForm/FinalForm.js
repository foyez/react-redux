import React from 'react';
import { Form, Field } from 'react-final-form';

import Input from './Input';

const renderInput = ({ input, meta: { touched, error } }) => (
  <Input
    { ...input }
    errorMessage={ touched && error }
  />
);

const onSubmit = values => {
  alert(JSON.stringify(values));
};

const FinalForm = () => (
  <Form
    onSubmit={ onSubmit }
    render={ ({ handleSubmit, invalid }) => (
      <div>
        <h2>Final Form</h2>
        <form onSubmit={ handleSubmit }>
          <Field
            type="text"
            name="fullName"
            component={ renderInput }
            validate={ composeValidators(required, minLength) }
          />
          <button type="submit" disabled={ invalid }>Submit</button>
        </form>
      </div>
    ) }
  />
);

const composeValidators = (...validators) => value => validators.reduce((error, validator) => error || validator(value), undefined);

const required = val => {
  if (!val || val === '') {
    return 'This field is required.';
  }

  return undefined;
};

const minLength = val => {
  if (val.length < 6) {
    return 'Minimum length should be 6.';
  }

  return undefined;
};

export default FinalForm;