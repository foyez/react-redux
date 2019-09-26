import React, { Suspense, useEffect } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import store from './store/store';
import { loadUser } from './store/actions';

import MainContainer from './containers/MainContainer/MainContainer';
import Layout from './hoc/Layout/Layout';
import ContactData from './containers/ContactData/ContactData';
import ReduxForm from './containers/ReduxForm/ReduxForm';
import PrivateRoute from './shared/PrivateRoute';
import Login from './containers/Auth/Login/Login';
import Register from './containers/Auth/Register/Register';
import Logout from './containers/Auth/Logout/Logout';
import LazyComponent from './components/LazyComponent/LazyComponent';

// const LazyComponent = React.lazy(() => {
// 	return import('./components/LazyComponent/LazyComponent');
// });

const App = () => {
	useEffect(() => {
		store.dispatch(loadUser());
	}, []);

	const routes = (
		<Switch>
			<Route path='/login' component={ Login } />
			<Route path='/register' component={ Register } />
			<PrivateRoute path='/logout' component={ Logout } />
			<Route path='/contact' component={ ContactData } />
			<Route path='/redux-form' component={ ReduxForm } />
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

export default withRouter(App);
