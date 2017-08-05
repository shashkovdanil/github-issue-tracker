import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SearchBar from './SearchBar';
import PerPage from './PerPage';
import IssuesList from './IssuesList';
import Pagination from './Pagination';
import Preloader from './Preloader';

const Wrapper = styled.div`
  display: ${props => (props.visible ? 'block' : 'none')}
`;

const ErrorMessage = styled.p`
  font-family: 'Noto Sans', sans-serif;
  text-align: center;
  font-size: 1.2rem;
`

class IssuesPage extends PureComponent {
  static propTypes = {
    q: PropTypes.string,
    page: PropTypes.string,
    search: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired
  };

  static defaultProps = {
    q: '',
    page: '1',
    perPage: '30'
  };

  state = {
    q: ''
  };

  componentDidMount() {
    const { q, page, perPage } = this.props;
    if (q) {
      this.setState({ q }, () => this.fetchIssues(page, perPage));
    }
  }

  componentWillReceiveProps({ page, q, perPage }) {
    if (this.props.q !== q || this.props.page !== page || this.props.perPage !== perPage) {
      this.setState({ q }, () => this.fetchIssues(page, perPage));
    }
  }

  onChange = e => {
    this.setState({ q: e.target.value });
  };

  fetchIssues = (page, perPage) => {
    if (this.state.q !== '') {
      this.props.search(this.state.q, page, perPage);
    }
  };

  changeQtyIssuesOnPage = e => {
    this.props.changeQtyIssuesOnPage(e.target.value);
  };

  render() {
    const { q } = this.state;
    const { isFetching, page, perPage, error, issuesList } = this.props;
    let query = '';
    if (q !== '') {
      const user = q.split('/')[0];
      const repo = q.split('/')[1];
      query = `?q=user:${user}+repo:${repo}`;
    }
    const content =
      error !== ''
        ? <ErrorMessage>
            {error}
          </ErrorMessage>
        : <Wrapper visible={issuesList.length > 0 && q}>
            <PerPage active={perPage} query={query} />
            <IssuesList />
            <Pagination active={page} query={query} perPage={perPage} />
          </Wrapper>;
    return (
      <div>
        <SearchBar
          onChange={this.onChange}
          changePerPage={this.changeQtyIssuesOnPage}
          perPage={this.props.perPage}
          q={q}
          to={{ pathname: '/', search: query }}
        />
        {isFetching
          ? <Preloader />
          : content}
      </div>
    );
  }
}

export default IssuesPage;
