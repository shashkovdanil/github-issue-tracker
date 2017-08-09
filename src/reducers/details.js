// @flow
import * as types from '../constants'

const initialState = {
  details: {},
  isFetching: false,
  error: ''
}

const issues = (state: Object = initialState, action: Object) => {
  switch (action.type) {
    case types.REQUEST_DETAILS:
      return { ...state, isFetching: true }
    case types.RECEIVE_DETAILS:
      const { title, number, created_at, body } = action.details
      const { login, avatar_url, html_url } = action.details.user
      return {
        ...state,
        isFetching: false,
        details: {
          title,
          number,
          createdAt: created_at,
          content: body,
          name: login,
          avatar: avatar_url,
          url: html_url
        }
      }
    case types.SHOW_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.errMessage
      }
    default:
      return state
  }
}

export default issues
