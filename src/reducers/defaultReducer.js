import { DEFAULT_TYPE } from '../actions/types';

const initialState = {
  text: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DEFAULT_TYPE:
      return {
        text: [...state.text, action.payload]
      };
    default:
      return state;
  }
};
