import React, { Fragment } from 'react';

import classes from './SideDrawer.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

const SideDrawer = props => {
  let attachedClasses = [classes.SideDrawer, classes.Close];

  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }

  return (
    <Fragment>
      <Backdrop show={ props.open } clicked={ props.closed } />
      <div className={ attachedClasses.join(' ') }>
        <div className={ classes.Logo }>
          <Logo />
        </div>
        <nav onClick={ props.closed }>
          <NavigationItems auth={ props.auth } />
        </nav>
      </div>
    </Fragment>
  )
}

export default SideDrawer;