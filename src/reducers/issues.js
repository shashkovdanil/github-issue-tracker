import * as types from '../constants';

const initialState = {
  issues: [],
  isFetching: false,
  perPage: 30,
  page: 1
};

const issues = (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_ISSUES:
      return { ...state, isFetching: true };
    case types.RECEIVE_ISSUES:
      return {
        ...state,
        isFetching: false,
        issues: action.issues
      }
    default:
      return state;
  }
};

export default issues;
