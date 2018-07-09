import { combineReducers } from 'redux';
import defaultReducer from './defaultReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  data: defaultReducer,
  error: errorReducer
});
