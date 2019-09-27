import React, { useState } from 'react';

const Form = props => {
  const [values, setValues] = useState({});

  return (
    <form>{ props.children }</form>
  );
};

export default Form;