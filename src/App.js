import React, { Suspense, useEffect } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import store from './store/store';
import { loadUser } from './store/actions';

import MainContainer from './containers/MainContainer/MainContainer';
import Layout from './hoc/Layout/Layout';
import ContactData from './containers/ContactData/ContactData';
import PrivateRoute from './shared/PrivateRoute';
import Login from './containers/Auth/Login/Login';
import Register from './containers/Auth/Register/Register';
import Logout from './containers/Auth/Logout/Logout';
import LazyComponent from './components/LazyComponent/LazyComponent';

// const LazyComponent = React.lazy(() => {
// 	return import('./components/LazyComponent/LazyComponent');
// });

const App = (props) => {
	useEffect(() => {
		store.dispatch(loadUser());
	}, []);

	const routes = (
		<Switch>
			<Route path='/login' component={ Login } />
			<Route path='/register' component={ Register } />
			<PrivateRoute path='logout' component={ Logout } />
			<Route path='/contact' component={ ContactData } />
			<PrivateRoute path='/lazy' component={ LazyComponent } />
			<Route path='/' exact component={ MainContainer } />
			<Redirect to='/' />
		</Switch>
	);

	return (
		<div className='App'>
			<Layout>
				<Suspense fallback={ <p>Loading...</p> }>{ routes }</Suspense>
			</Layout>
		</div>
	);
};

const mapStateToProps = state => ({
	auth: state.auth
})

export default withRouter(connect(mapStateToProps)(App));
