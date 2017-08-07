// @flow
import * as types from '../constants'

const initialState = {
  issuesList: [],
  isFetching: false,
  error: ''
}

const issues = (state: Object = initialState, action: Object) => {
  switch (action.type) {
    case types.REQUEST_ISSUES:
      return { ...state, isFetching: true }
    case types.RECEIVE_ISSUES:
      return {
        ...state,
        isFetching: false,
        issuesList: action.issues.map((issue) => ({
          title: issue.title,
          number: issue.number,
          createdAt: issue.created_at,
          user: {
            avatar: issue.user.avatar_url,
            url: issue.user.html_url
          }
        }))
      }
    case types.SHOW_ERROR:
      const notFound = action.errMessage === 'Not Found' && 'По вашему запросу ничего не найдено'
      return {
        ...state,
        isFetching: false,
        error: notFound || action.errMessage
      }
    default:
      return state
  }
}

export default issues
