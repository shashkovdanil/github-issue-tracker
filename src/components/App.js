import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header';
import SearchInput from './SearchInput';
import Preloader from './Preloader';

import * as actions from '../actions';

class App extends Component {
  state = {
    q: ''
  };

  componentDidMount() {
    if (this.props.route.location.search) {
      const parseUrl = (str, pos) =>
        this.props.route.location.search.split('+')[pos].split(str)[1];
      const user = parseUrl('user:', 0);
      const repo = parseUrl('repo:', 1).split('&')[0];
      const q = `${user}/${repo}`;
      this.setState({ q }, () => this.props.search(this.state.q));
    }
  }

  onChange = e => {
    this.setState({ q: e.target.value });
  };

  componentWillReceiveProps({ route }) {
    const currentPage = this.props.route.location.search.split('&')[1];
    const nextPage = route.location.search.split('&')[1];
    if (currentPage !== nextPage) {
      this.props.search(this.state.q, nextPage);
    }
  }

  onClick = () => {
    this.props.search(this.state.q);
    this.props.getPagesCount(this.state.q);
  };

  render() {
    const pagesArr = [];
    for (let i = 1; i <= this.props.pages; i += 1) {
      pagesArr.push(i);
    }
    const user = this.state.q.split('/')[0];
    const repo = this.state.q.split('/')[1];
    const query = `?q=user:${user}+repo:${repo}`;
    return (
      <div>
        <Header />
        <SearchInput
          onChange={this.onChange}
          q={this.state.q}
          onClick={this.onClick}
          to={{ pathname: '/', search: query }}
        />
        <p>{this.state.q}</p>
        {this.props.isFetching
          ? <Preloader />
          : <ul>
              {this.props.issues.map(i => <li key={i}><a href="">{i}</a></li>)}
            </ul>}
        <ul>
          {pagesArr.map(i => (
            <Link to={{ pathname: '/', search: `${query}&page=${i}` }}>
              {i}
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  route: state.router,
  issues: state.issues.issues,
  isFetching: state.issues.isFetching,
  pages: state.pages
});

const mapDispatchToProps = dispatch => ({
  search: (q, page) => dispatch(actions.searchIssues(q, page)),
  getPagesCount: repo => dispatch(actions.getCountPages(repo))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
