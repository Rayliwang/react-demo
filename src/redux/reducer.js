import { combineReducers } from 'redux';
import store from 'store';
import {
  MOLD_LIST_REQUEST,
  MOLD_LIST_SUCCESS,
  MOLD_LIST_FAIL
} from './types';

function moldList(state = {
  isRequesting: false,
  status: null,
  payload: null
}, action) {
  const { type, payload } = action;
  switch (type) {
    case MOLD_LIST_REQUEST:
      return {...state, isRequesting: true, status: null, payload: null};
    case MOLD_LIST_SUCCESS:
      let moldTitle = {};
      payload.forEach(item => {
        moldTitle[item.key] = item.title;
      });
      store.set('moldTitle', moldTitle);
      return {...state, isRequesting: false, status: true, payload};
    case MOLD_LIST_FAIL:
      return {...state, isRequesting: false, status: false, payload};
    default:
      return state;
  }
}


export default combineReducers({
  moldList
});