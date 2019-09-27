import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import classes from './Login.module.css';
import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';
import { checkValidity, updateObj } from '../../../shared/utility';
import { login } from '../../../store/actions';

const Login = (props) => {
  const [controls, setControls] = useState({
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
        required: true
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
    const rules = controls[controlName].validation;
    const { error, value } = checkValidity(properties, rules);

    const updatedControls = updateObj(controls, {
      [controlName]: updateObj(controls[controlName], {
        value,
        error
      })
    });
    setControls(updatedControls);
  }

  const handleSubmit = e => {
    e.preventDefault();

    const loginData = {};
    for (let key in controls) {
      loginData[key] = controls[key].value;
    }

    console.log(loginData)
    props.login(loginData.email, loginData.password);
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
    return <Redirect to={ from } />;
  }

  return (
    <div className={ classes.Login }>
      <form>
        { form }
        <Button
          btnType='Success'
          clicked={ e => handleSubmit(e) }
        >Login</Button>
        <p>
          {/* Don't have an account? <Link to='/register'>Register</Link> */ }
          Don't have an account? <Link to={ {
            pathname: '/register',
            state: { from }
          } }>Register</Link>
        </p>
      </form>
    </div>
  )
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);