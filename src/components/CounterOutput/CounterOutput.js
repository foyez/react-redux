import React from 'react';

import classes from './CounterOutput.module.css';

const CounterOutput = props => (
  <div className={ classes.CounterOutput }>
    Current Counter: { props.value }
  </div>
);

export default CounterOutput;