import * as types from '../constants';

const initialState = {
  query: '',
  page: 1,
  perPage: 30
}

const url = (state = initialState, action) => {
  if (action.type === types.CHANGE_URL) {
    const url = `?q=user:${action.user}+repo:${action.repo}&page=${action.page}&per_page=${action.perPage}`;
    return url;
  }
  return state;
};

export default url;
