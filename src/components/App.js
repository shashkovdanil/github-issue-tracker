import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import SearchInput from './SearchInput';
import IssueList from './IssueList';
import Pagination from './Pagination';
import Preloader from './Preloader';

import * as actions from '../actions';

class App extends Component {
  state = {
    q: ''
  };

  componentDidMount() {
    if (this.props.route.location.search) {
      const parseUrl = (str, pos) => this.props.route.location.search.split('+')[pos].split(str)[1];
      const user = parseUrl('user:', 0);
      const repo = parseUrl('repo:', 1).split('&')[0];
      const q = `${user}/${repo}`;
      this.setState({ q }, () => this.fetchIssues(this.props.route.location.search.split('&')[1]));
    }
  }

  onChange = e => {
    this.setState({ q: e.target.value });
  };

  componentWillReceiveProps({ route }) {
    const currentPage = this.props.route.location.search.split('&')[1];
    const nextPage = route.location.search.split('&')[1];
    if (currentPage !== nextPage) {
      this.fetchIssues(nextPage);
    }
  }

  fetchIssues = (page = '') => {
    this.props.search(this.state.q, page);
  };

  render() {
    let activePage = 1;
    if (this.props.route.location.search.split('&')[1]) {
      activePage = Number(this.props.route.location.search.split('&')[1].split('=')[1]);
    }
    const user = this.state.q.split('/')[0];
    const repo = this.state.q.split('/')[1];
    const query = `?q=user:${user}+repo:${repo}`;
    return (
      <div>
        <SearchInput
          location={this.props.location}
          onChange={this.onChange}
          q={this.state.q}
          onClick={this.fetchIssues}
          to={{ pathname: '/', search: query }}
        />
        {this.props.isFetching
          ? <Preloader />
          : <div>
              <IssueList location={this.props.location} />
              <Pagination location={this.props.location} activePage={activePage} query={query} />
            </div>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  route: state.router,
  issues: state.issues.issuesList,
  isFetching: state.issues.isFetching,
  pages: state.pages
});

const mapDispatchToProps = dispatch => ({
  search: (q, page) => dispatch(actions.searchIssues(q, page))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
