import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    { ...rest }
    render={ (props) => {
      console.log(auth)
      if (auth.isLoading) {
        console.log('Loading...');
        return <h2>Loading...</h2>;
      } else if (!auth.isAuthenticated && !auth.isLoading) {
        console.log('Login')
        return <Redirect to={ {
          pathname: '/login',
          state: { from: props.location }
        } } />;
      } else {
        return <Component { ...props } />;
      }
    } }
  />
);

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
// export default PrivateRoute;