import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import ButtonLink from './ButtonLink';

import search from '../icons/search.svg';

const Container = styled.div`
  background-color: white;
  width: 30%;
  @media (max-width: 720px) {
		width: 60%;
  }
  display: flex;
  margin: 2rem auto;
  padding: 0.5rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: 0 3px 8px rgba(0, 0, 0, .2), 0 0 0 1px rgba(0, 0, 0, .08);
  }
`;

const Search = styled.input`
  font-size: 1rem;
  font-family: 'Noto Sans', sans-serif;
  width: 100%;
  height: 2rem;
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
`;

class SearchInput extends PureComponent {
  componentDidMount() {
    this.searchInput.focus();
  }

  render() {
    const { q, onChange, to, onClick } = this.props;
    return (
      <Container>
        <Search
          innerRef={(input) => { this.searchInput = input; }}
          onChange={onChange}
          value={q}
          type="text"
          placeholder="user/repo"
        />
        <ButtonLink to={to} onClick={onClick}>
          <img src={search} alt="search" />
        </ButtonLink>
      </Container>
    );
  }
}

export default withRouter(SearchInput);
