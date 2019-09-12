import React from 'react';

import classes from '../NavigationItems/NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => {
  const { isAuthenticated, user } = props.auth;
  const authLinks = (
    <ul className={ classes.NavigationItems }>
      <span>{ user ? `Welcome ${user.name}` : '' }</span>
      <NavigationItem link='/' exact>Home</NavigationItem>
      <NavigationItem link='/contact'>Contact</NavigationItem>
      <NavigationItem link='/login'>Logout</NavigationItem>
    </ul>
  );
  const guestLinks = (
    <ul className={ classes.NavigationItems }>
      <NavigationItem link='/' exact>Home</NavigationItem>
      <NavigationItem link='/contact'>Contact</NavigationItem>
      <NavigationItem link='/login'>Login</NavigationItem>
    </ul>
  );

  return isAuthenticated ? authLinks : guestLinks;
}

export default NavigationItems;