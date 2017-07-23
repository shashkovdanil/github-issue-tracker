import * as types from '../constants';

export const requestIssues = () => ({
  type: types.REQUEST_ISSUES
});

export const receiveIssues = issues => ({
  type: types.RECEIVE_ISSUES,
  issues: issues.map(issue => issue.title)
});

export const receivePages = pages => ({
  type: types.RECEIVE_PAGES,
  pages
});

export const getCountPages = repo => dispatch =>
  fetch(`https://api.github.com/repos/${repo}`)
    .then(res => res.json())
    .then(({ open_issues_count }) => dispatch(receivePages(open_issues_count)));

export const searchIssues = (q, page) => dispatch => {
  dispatch(requestIssues());
  return fetch(`https://api.github.com/repos/${q}/issues?${page}`)
    .then(res => res.json())
    .then(issues => {
      dispatch(receiveIssues(issues));
      dispatch(getCountPages(q));
    });
};
