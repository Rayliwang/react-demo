import API from './API';
import {
  MOLD_LIST_REQUEST,
  MOLD_LIST_SUCCESS,
  MOLD_LIST_FAIL
} from './types';

function moldListRequest() {
  return { type: MOLD_LIST_REQUEST };
}
function moldList(payload) {
  return { type: MOLD_LIST_SUCCESS, payload };
}
function moldListFail(payload) {
  return { type: MOLD_LIST_FAIL, payload };
}
function getMoldList() {
  return function (dispatch) {
    dispatch(moldListRequest());
    API.getMoldList().then(resp => {
      dispatch(moldList(resp));
    }).catch(error => {
      if (error === '无效token') {
        window.location.href = '#/logout';
      }
      dispatch(moldListFail(error))
    })
  }
}


export {
  getMoldList,
}