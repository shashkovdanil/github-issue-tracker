import * as types from '../constants';

const initialState = '';

const pages = (state = initialState, action) => {
  if (action.type === types.RECEIVE_PAGES) {
    return state = Math.ceil(action.pages / 30);
  } else {
    return state;
  }
};

export default pages;
