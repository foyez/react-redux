import { combineReducers } from 'redux';

import counter from './counter';
import auth from './auth';

const rootReducers = combineReducers({
  counter,
  auth
});

export default rootReducers;