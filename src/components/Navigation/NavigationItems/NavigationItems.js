import React from 'react';

import classes from '../NavigationItems/NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = () => (
  <ul className={ classes.NavigationItems }>
    <NavigationItem link='/' exact>Home</NavigationItem>
    <NavigationItem link='/contact'>Contact</NavigationItem>
  </ul>
)

export default NavigationItems;