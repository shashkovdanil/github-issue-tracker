// @flow
import * as types from '../constants'
import { makeActionCreator } from '../utils'

type Dispatch = (action: Object) => Object

export const requestIssues = makeActionCreator(types.REQUEST_ISSUES)
export const requestDetails = makeActionCreator(types.REQUEST_DETAILS)
export const receiveIssues = makeActionCreator(types.RECEIVE_ISSUES, 'issues')
export const receiveDetails = makeActionCreator(types.RECEIVE_DETAILS, 'details')
export const receivePages = makeActionCreator(types.RECEIVE_PAGES, 'pages', 'perPage')
export const showError = makeActionCreator(types.SHOW_ERROR, 'errMessage')

// async actions
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
