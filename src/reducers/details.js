import * as types from '../constants';

const initialState = {
  details: {},
  isFetching: false,
  error: ''
};

const issues = (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_DETAILS:
      return { ...state, isFetching: true };
    case types.RECEIVE_DETAILS:
      return {
        ...state,
        isFetching: false,
        details: action.details,
      };
    case types.SHOW_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.errMessage
      }
    default:
      return state;
  }
};

export default issues;
