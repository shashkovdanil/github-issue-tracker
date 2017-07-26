import * as types from '../constants';

const initialState = '';

const pages = (state = initialState, action) => {
  if (action.type === types.RECEIVE_PAGES) {
    const newState = Math.ceil(action.pages / 30);
    return newState;
  }
  return state;
};

export default pages;
