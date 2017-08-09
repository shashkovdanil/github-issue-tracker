// @flow
import React, { PureComponent } from 'react'
import styled from 'styled-components'

import SearchBar from './SearchBar'
import PerPage from './PerPage'
import IssuesList from './IssuesList'
import Pagination from './Pagination'
import Preloader from './common/Preloader'
import Error from './common/Error'

const Wrapper = styled.div`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  width: 100%;
  overflow: hidden;
`

type Props = {
  q: string,
  page: string,
  perPage: string,
  search: (q: string, page: string, perPage: string) => any,
  error: string,
  issuesList: Array<Object>,
  isFetching: boolean
}

class IssuesPage extends PureComponent {
  props: Props

  static defaultProps = {
    q: '',
    page: '1',
    perPage: '30'
  }

  state = {
    user: '',
    repo: ''
  }

  componentDidMount () {
    const { q, page, perPage } = this.props
    if (q) {
      const user = q.split('/')[0]
      const repo = q.split('/')[1]
      this.setState({ user, repo }, () => this.fetchIssues(page, perPage))
    }
  }

  componentWillReceiveProps ({ page, q, perPage }: Props) {
    if (this.props.q !== q || this.props.page !== page || this.props.perPage !== perPage) {
      const user = q.split('/')[0]
      const repo = q.split('/')[1]
      this.setState({ user: user || '', repo: repo || '' }, () => this.fetchIssues(page, perPage))
    }
  }

  onChangeHandler = (e: Object) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  fetchIssues = (page: string, perPage: string) => {
    const { user, repo } = this.state
    if (user && repo) {
      this.props.search(`${user}/${repo}`, page, perPage)
    }
  }

  render () {
    const { user, repo } = this.state
    const { isFetching, page, perPage, error, issuesList } = this.props
    let query = ''
    if (user && repo) {
      query = `?q=user:${user}+repo:${repo}`
    }
    if (error) {
      return (
        <Error>
          {error}
        </Error>
      )
    }
    return (
      <div>
        <SearchBar
          onChange={this.onChangeHandler}
          user={user}
          repo={repo}
          perPage={this.props.perPage}
          to={{ pathname: '/', search: query }}
        />
        {isFetching
          ? <Preloader />
          : <Wrapper visible={issuesList.length > 0 && user && repo}>
              <PerPage active={perPage} query={query} />
              <IssuesList query={query} />
              <Pagination active={page} query={query} perPage={perPage} />
            </Wrapper>}
      </div>
    )
  }
}

export default IssuesPage
