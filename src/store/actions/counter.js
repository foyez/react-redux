import { STORE_COUNTER } from './actionTypes';

// export const storeCounter = (counter) => {
//   return {
//     type: STORE_COUNTER,
//     payload: counter
//   }
// }

export const storeCounter = (counter) => (dispatch, getState) => {
  console.log(getState());

  setTimeout(() => {
    dispatch({
      type: STORE_COUNTER,
      payload: counter
    });
  }, 1000);
}