import React from 'react';
import { reduxForm, Field } from 'redux-form';

import Input from './Input';

const onSubmit = values => {
  alert(JSON.stringify(values));
}

const ReduxForm = ({ handleSubmit }) => (
  <div>
    <h2>Redux Form</h2>
    <form onSubmit={ handleSubmit }>
      <Field
        type="text"
        name="fullName"
        component={ renderInput }
      />
      <Field
        type="email"
        name="email"
        component={ renderInput }
      />
      <button type="submit">Submit</button>
    </form>
  </div>
);

const renderInput = ({ input, meta: { touched, error } }) => (
  <Input
    { ...input }
    errorMessage={ touched && error }
  />
);

const validate = val => {
  const errors = {};

  if (!val.fullName) {
    console.log('First Name is required');
    errors.fullName = 'Required';
  }

  if (!val.email) {
    console.log('email is required');
    errors.email = 'Required';
  } else if (!/^.+@.+$/i.test(val.email)) {
    console.log('email is invalid');
    errors.email = 'Invalid email address';
  }

  return errors;
};

export default reduxForm({ form: 'my-redux-form', onSubmit, validate })(ReduxForm);