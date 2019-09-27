import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

import classes from './Register.module.css';
import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';
import { checkValidity, updateObj } from '../../../shared/utility';
import { register } from '../../../store/actions';

const Register = (props) => {
  const [controls, setControls] = useState({
    name: {
      elType: 'input',
      elConfig: {
        type: 'text',
        placeholder: 'Full Name'
      },
      value: '',
      validation: {
        required: true
      },
      error: undefined
    },
    email: {
      elType: 'input',
      elConfig: {
        type: 'email',
        placeholder: 'Email'
      },
      value: '',
      validation: {
        required: true,
        isEmail: true
      },
      error: undefined
    },
    password: {
      elType: 'input',
      elConfig: {
        type: 'password',
        placeholder: 'Password'
      },
      value: '',
      validation: {
        required: true,
        isPassword: true
      },
      error: undefined
    },
    password2: {
      elType: 'input',
      elConfig: {
        type: 'password',
        placeholder: 'Confirm Password'
      },
      value: '',
      validation: {
        required: true,
        isPassword2: true
      },
      error: undefined
    }
  })
  const { from } = props.location.state || { from: { pathname: '/' } };

  const handleInputChange = (e, controlName) => {
    // const updatedControlName = updateObj(controls[controlName], {
    //   value: e.target.value,
    //   valid: checkValidity(e.target.value, controls[controlName].validation),
    //   touched: true
    // });
    // const updatedControls = updateObj(controls, {
    //   controlName: updatedControlName
    // });

    const properties = { value: e.target.value };
    controlName === 'password2' && (properties.password = controls['password'].value);
    const rules = controls[controlName].validation;
    const { error, value } = checkValidity(properties, rules);

    const updatedControls = updateObj(controls, {
      [controlName]: updateObj(controls[controlName], {
        value,
        error
      })
    })
    setControls(updatedControls);
  }

  const handleSubmit = e => {
    e.preventDefault();

    const registerData = {};
    for (let key in controls) {
      registerData[key] = controls[key].value;
    }

    console.log(registerData)
    const newUser = {
      name: registerData.name,
      email: registerData.email,
      password: registerData.password
    }

    props.register(newUser);
  }

  const formElArr = [];
  for (let key in controls) {
    formElArr.push({
      id: key,
      config: controls[key]
    })
  }

  const form = formElArr.map(formEl => (
    <Input
      key={ formEl.id }
      elType={ formEl.config.elType }
      elConfig={ formEl.config.elConfig }
      value={ formEl.config.value }
      error={ formEl.config.error }
      changed={ e => handleInputChange(e, formEl.id) }
    />
  ))

  if (props.isAuthenticated) {
    console.log('register');
    return <Redirect to={ from } />;
  }

  return (
    <div className={ classes.Register }>
      <form>
        { form }
        <Button
          btnType='Success'
          clicked={ e => handleSubmit(e) }
        >Register</Button>
        <p>
          Already have an account? <Link to='/login'>Login</Link>
        </p>
      </form>
    </div>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { register })(Register);