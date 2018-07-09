// import axios from 'axios';
import { CLEAR_ERRORS, GET_ERRORS, DEFAULT_TYPE } from './types';

// Default Action
export const defaultAction = text => dispatch => {
  dispatch(clearErrors());

  dispatch({
    type: DEFAULT_TYPE,
    payload: text
  });
};

// Error Action
export const errorAction = () => dispatch => {
  const error = 'Please enter a word to submit';

  dispatch({
    type: GET_ERRORS,
    payload: error
  });
};

// Clear Errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
