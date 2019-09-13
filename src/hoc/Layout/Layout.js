import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';

import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const Layout = (props) => {
	const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);

	const handleSideDrawerClose = () => {
		setSideDrawerIsVisible(false);
	}

	const handleSideDrawerToggle = () => {
		setSideDrawerIsVisible(!sideDrawerIsVisible);
	}

	const layout = (
		<Fragment>
			<Toolbar
				auth={ props.auth }
				drawerToggleClicked={ handleSideDrawerToggle } />
			<SideDrawer
				auth={ props.auth }
				open={ sideDrawerIsVisible }
				closed={ handleSideDrawerClose } />

			<main className={ classes.Content }>{ props.children }</main>
		</Fragment>
	);

	return !props.auth.isLoading && layout;
};

const mapStateToProps = state => ({
	auth: state.auth
})

export default connect(mapStateToProps)(Layout);
