import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import qs from 'querystringify';

import SearchInput from './SearchInput';
import IssueList from './IssueList';
import Pagination from './Pagination';
import Preloader from './Preloader';

import * as actions from '../actions';

class App extends PureComponent {
  static propTypes = {
    q: PropTypes.string,
    page: PropTypes.string,
    search: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    q: '',
    page: '1',
  };

  state = {
    q: '',
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

  onChange = (e) => {
    this.setState({ q: e.target.value });
  };

  fetchIssues = (page = '1', perPage) => {
    this.props.search(this.state.q, page, perPage);
  };

  changeQtyIssuesOnPage = e => {
    this.props.changeQtyIssuesOnPage(e.target.value);
  };

  render() {
    const { q } = this.state;
    const { isFetching, page } = this.props;
    const user = q.split('/')[0];
    const repo = q.split('/')[1];
    const query = `?q=user:${user}+repo:${repo}`;
    return (
      <div>
        <SearchInput
          onChange={this.onChange}
          changePerPage={this.changeQtyIssuesOnPage}
          perPage={this.props.perPage}
          q={q}
          onClick={this.fetchIssues}
          to={{ pathname: '/', search: query }}
        />
        {isFetching
          ? <Preloader />
          : <div>
            <IssueList />
            <Pagination activePage={page} query={query} />
          </div>}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { issues, isFetching, perPage } = state.issues;
  const parsedUrl = qs.parse(state.router.location.search);
  const page = parsedUrl.page;
  let q = '';
  if (parsedUrl.q) {
    // ?q=user:user+repo:repo => user/repo
    q = parsedUrl.q.split(' ').map(i => i.split(':')[1]).join().replace(',', '/');
  }
  return {
    page,
    q,
    issues,
    isFetching,
    perPage,
    pages: state.pages,
  };
};

const mapDispatchToProps = dispatch => ({
  search: (q, page, perPage) => dispatch(actions.searchIssues(q, page, perPage)),
  changeQtyIssuesOnPage: perPage => dispatch(actions.changeQtyIssuesOnPage(perPage))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
