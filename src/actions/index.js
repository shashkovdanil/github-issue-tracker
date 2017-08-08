// @flow
import * as types from '../constants'

type Dispatch = (action: Object) => Object

export const requestIssues = () => ({
  type: types.REQUEST_ISSUES
})

export const receiveIssues = (issues: Array<Object>) => ({
  type: types.RECEIVE_ISSUES,
  issues: issues.map((issue) => ({
    title: issue.title,
    number: issue.number,
    createdAt: issue.created_at,
    user: {
      avatar: issue.user.avatar_url,
      url: issue.user.html_url
    }
  }))
})

export const receivePages = (pages: string, perPage: string) => ({
  type: types.RECEIVE_PAGES,
  pages,
  perPage
})

export const showError = (errMessage: string) => ({
  type: types.SHOW_ERROR,
  errMessage
})

export const getCountPages = (repo: string, perPage: string) => async (dispatch: Dispatch) => {
  const response = await fetch(`https://api.github.com/repos/${repo}`)
  const { open_issues_count } = await response.json()
  dispatch(receivePages(open_issues_count, perPage))
}

export const searchIssues = (q: string, page: string, perPage: string) => async (
  dispatch: Dispatch
) => {
  dispatch(requestIssues())
  const response = await fetch(`https://api.github.com/repos/${q}/issues?page=${page}&per_page=${perPage}`)
  const json = await response.json()
  if (response.ok) {
    dispatch(receiveIssues(json))
    dispatch(getCountPages(q, perPage))
  } else {
    dispatch(showError(json.message))
  }
}

export const requestDetails = () => ({
  type: types.REQUEST_DETAILS
})

export const receiveDetails = (details: Object) => ({
  type: types.RECEIVE_DETAILS,
  details: {
    title: details.title,
    number: details.number,
    createdAt: details.created_at,
    content: details.body,
    name: details.user.login,
    avatar: details.user.avatar_url,
    url: details.user.html_url
  }
})

export const fetchDetails = (repo: string, issueId: string) => async (dispatch: Dispatch) => {
  dispatch(requestDetails())
  const response = await fetch(`https://api.github.com/repos/${repo}/issues/${issueId}`)
  const json = await response.json()
  if (response.ok) {
    dispatch(receiveDetails(json))
  } else {
    dispatch(showError(json.message))
  }
}
