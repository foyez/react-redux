import React from 'react';

import classes from './Control.module.css';

const Controls = props => (
  <div className={ classes.Control }>
    <div className={ classes.Label }>{ props.label }</div>
    <button className={ classes.Less }>-</button>
    <button className={ classes.More }>+</button>
    <input className={ classes.Value } type="number" />
  </div>
);

export default Controls;