import * as types from '../constants';

const initialState = {
  issuesList: [],
  isFetching: false,
  perPage: 30,
  error: ''
};

const issues = (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_ISSUES:
      return { ...state, isFetching: true };
    case types.RECEIVE_ISSUES:
      return {
        ...state,
        isFetching: false,
        issuesList: action.issues,
      };
    case types.CHANGE_QTY_ISSUES_ON_PAGE:
      return {
        ...state,
        perPage: action.perPage
      }
    default:
      return state;
  }
};

export default issues;
