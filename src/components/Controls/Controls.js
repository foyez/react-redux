import React from 'react';

import classes from './Controls.module.css';
import Control from './Control/Control';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
]

const Controls = props => (
  <div className={ classes.Controls }>
    { controls.map(ctrl => (
      <Control key={ ctrl.label } label={ ctrl.label } />
    )) }
  </div>
);

export default Controls;