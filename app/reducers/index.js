import { combineReducers } from 'redux';

import userInfo from './userInfo.js';

const rootReducer = combineReducers({
  userInfo: userInfo
});

export default rootReducer;
