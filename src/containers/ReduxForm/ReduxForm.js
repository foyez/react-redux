import React from 'react';
import { Field, reduxForm } from 'redux-form';

let ReduxForm = props => {
  const { handleSubmit } = props;
  return (<form onSubmit={ handleSubmit }>{/* form body */ }</form>);
}

ReduxForm = reduxForm({
  // a unique name for the form
  form: 'contact'
})(ReduxForm)

export default ReduxForm;