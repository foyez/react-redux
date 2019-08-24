const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;

const initialCounterState = {
  counter: 0
}

const initialResultState = {
  result: 0
}

// Reducer - pure function define which action will do what & return state
const counterReducer = (state = initialCounterState, action = {}) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + 1
      };
    case 'DECREMENT':
      return {
        ...state,
        counter: state.counter - 1
      };
    default:
      return state
  }
}

const resultReducer = (state = initialResultState, action = {}) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        result: state.result + action.value
      };
    default:
      return state
  }
}

const rootReducer = combineReducers({
  counterReducer,
  resultReducer
});

// Middleware
const customMiddleware = store => next => action => {
  console.log('customMiddleware Triggered: ', action);

  next(action);
};

const incrementMiddleware = store => next => action => {
  if (action.type === 'INCREMENT') {
    console.log('incrementMiddleware Triggered: Increment button is clicked');
  }

  next(action);
}

// Store - variable or object keep the states
const store = createStore(
  rootReducer,
  applyMiddleware(customMiddleware, incrementMiddleware)
);

// Subscription - executed when state updated
store.subscribe(() => {
  console.log('[Subscription]', store.getState());
})

// Dispatching Action - call actions
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'ADD', value: 10 });