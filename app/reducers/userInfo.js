import * as actionTypes from '../constants/userInfo.js'

const initialState = {}

export default function userInfo(state = initialState, action) {
  switch(action.type) {
    case actionTypes.USERINFO_LOGIN:
      return action.data;

    case actionTypes.UPDATE_CITY_NAME:
      return action.data;

    default:
      return state;
  }
}
