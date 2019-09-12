import React, { Suspense, useEffect } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import store from './store/store';
import * as actionCreators from './store/actions';

import MainContainer from './containers/MainContainer/MainContainer';
import Layout from './hoc/Layout/Layout';
import ContactData from './containers/ContactData/ContactData';
import Login from './containers/Auth/Login/Login';
import Register from './containers/Auth/Register/Register';
import PrivateRoute from './shared/PrivateRoute';

const LazyComponent = React.lazy(() => {
	return import('./components/LazyComponent/LazyComponent');
});

const App = () => {
	useEffect(() => {
		store.dispatch(actionCreators.loadUser());
	}, []);

	const routes = (
		<Switch>
			<Route path='/login' component={ Login } />
			<Route path='/register' component={ Register } />
			<Route path='/contact' component={ ContactData } />
			<PrivateRoute path='/lazy' render={ () => <LazyComponent /> } />
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

export default withRouter(App);
