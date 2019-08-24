import { INCREMENT, ADD, STORE_COUNTER, DELETE_COUNTER } from '../actions/actionTypes';

const initialState = {
  counter: 0,
  storeCounter: []
}

const counterReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      };
    case ADD:
      return {
        ...state,
        counter: state.counter + action.payload
      };
    case STORE_COUNTER:
      return {
        ...state,
        storeCounter: [...state.storeCounter, { id: new Date(), value: action.payload }]
      }
    case DELETE_COUNTER:
      return {
        ...state,
        storeCounter: state.storeCounter.filter(counter => counter.id !== action.id)
      };
    default:
      return state;
  }
}

export default counterReducer;