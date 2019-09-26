import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import counter from './counter';
import auth from './auth';

const rootReducers = combineReducers({
  counter,
  auth,
  form: formReducer
});

export default rootReducers;