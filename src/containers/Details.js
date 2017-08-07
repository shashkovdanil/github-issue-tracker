// @flow
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import qs from 'querystringify'

import DetailsPage from '../components/DetailsPage'

import * as actions from '../actions'

const mapStateToProps = (state: Object) => {
  const { details, isFetching, error } = state.details
  const parsedUrl = qs.parse(state.router.location.search)
  const repo = parsedUrl.q.split(' ').map((i) => i.split(':')[1]).join().replace(',', '/')
  return {
    repo,
    details,
    isFetching,
    error
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchDetails: bindActionCreators(actions.fetchDetails, dispatch)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DetailsPage))
