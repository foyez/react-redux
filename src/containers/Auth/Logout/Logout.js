import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import { logout } from '../../../store/actions';
import store from '../../../store/store';

const Logout = () => {
  useEffect(() => {
    store.dispatch(logout());
  }, []);

  return <Redirect to='/' />;
};

export default Logout;