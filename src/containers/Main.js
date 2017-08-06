// @flow
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import qs from 'querystringify'

import IssuesPage from '../components/IssuesPage'

import * as actions from '../actions'

const mapStateToProps = (state: Object) => {
  const { isFetching, error, issuesList } = state.issues
  const parsedUrl = qs.parse(state.router.location.search)
  const page = parsedUrl.page
  const perPage = parsedUrl.per_page
  let q = ''
  if (parsedUrl.q) {
    // ?q=user:user+repo:repo => user/repo
    q = parsedUrl.q.split(' ').map((i) => i.split(':')[1]).join().replace(',', '/')
  }
  return {
    issuesList,
    page,
    q,
    isFetching,
    perPage,
    error
  }
}

const mapDispatchToProps = (dispatch) => ({
  search: bindActionCreators(actions.searchIssues, dispatch)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(IssuesPage))
