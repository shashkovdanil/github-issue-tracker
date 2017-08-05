import * as types from '../constants';

export const requestIssues = () => ({
  type: types.REQUEST_ISSUES,
});

export const receiveIssues = issues => ({
  type: types.RECEIVE_ISSUES,
  issues: issues.map(issue => ({
    title: issue.title,
    number: issue.number,
  })),
});

export const receivePages = (pages, perPage) => ({
  type: types.RECEIVE_PAGES,
  pages,
  perPage
});

export const showError = errMessage => ({
  type: types.SHOW_ERROR,
  errMessage,
});

export const getCountPages = repo => async (dispatch) => {
  const response = await fetch(`https://api.github.com/repos/${repo}`);
  const { open_issues_count } = await response.json();
  dispatch(receivePages(open_issues_count));
};

export const searchIssues = (q, page, perPage) => async (dispatch) => {
  dispatch(requestIssues());
  const response = await fetch(`https://api.github.com/repos/${q}/issues?page=${page}&per_page=${perPage}`);
  const json = await response.json();
  if (response.ok) {
    dispatch(receiveIssues(json));
    dispatch(getCountPages(q));
  } else {
    dispatch(showError(json.message));
  }
};

export const changeQtyIssuesOnPage = perPage => ({
  type: types.CHANGE_QTY_ISSUES_ON_PAGE,
  perPage
});

export const changeUrl = (user, repo, page, perPage) => ({
  type: types.CHANGE_URL,
  user,
  repo,
  page,
  perPage
})
