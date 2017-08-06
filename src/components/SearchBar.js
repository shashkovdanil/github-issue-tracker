// @flow
import React from 'react'
import styled from 'styled-components'

import ButtonLink from './ButtonLink'

import search from '../icons/search.svg'

const Wrapper = styled.div`
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
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.08);
  }
`

const Input = styled.input`
  font-size: 1rem;
  font-family: 'Noto Sans', sans-serif;
  width: 100%;
  height: 2rem;
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
`

type Props = {
  to: { pathname: string, search: string },
  q: string,
  onChange: (e: Object) => any
}

const SearchInput = ({ q, onChange, to }: Props) =>
  <Wrapper>
    <Input onChange={onChange} value={q} type="text" placeholder="user/repo" />
    <ButtonLink to={to}>
      <img src={search} alt="search" />
    </ButtonLink>
  </Wrapper>

export default SearchInput
