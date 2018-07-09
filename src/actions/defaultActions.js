// import axios from 'axios';
import { CLEAR_ERRORS, DEFAULT_TYPE } from './types';

// Default Action
export const defaultAction = text => dispatch => {
  dispatch(clearErrors());

  dispatch({
    type: DEFAULT_TYPE,
    payload: text
  });
};

// Clear Errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
