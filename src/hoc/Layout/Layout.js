import React, { Fragment, useState } from 'react';

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

	return (
		<Fragment>
			<Toolbar drawerToggleClicked={ handleSideDrawerToggle } />
			<SideDrawer open={ sideDrawerIsVisible } closed={ handleSideDrawerClose } />

			<main className={ classes.Content }>{ props.children }</main>
		</Fragment>
	);
};

export default Layout;
