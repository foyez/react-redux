import React, { Suspense } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import MainContainer from './containers/MainContainer/MainContainer';
import Layout from './hoc/Layout/Layout';
import ContactData from './containers/ContactData/ContactData';

const LazyComponent = React.lazy(() => {
	return import('./components/LazyComponent/LazyComponent');
});

const App = () => {
	const routes = (
		<Switch>
			<Route path='/contact' component={ContactData} />
			<Route path='/lazy' render={() => <LazyComponent />} />
			<Route path='/' exact component={MainContainer} />
			<Redirect to='/' />
		</Switch>
	);

	return (
		<div className='App'>
			<Layout>
				<Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
			</Layout>
		</div>
	);
};

export default withRouter(App);
