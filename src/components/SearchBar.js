// @flow
import React from 'react'
import styled from 'styled-components'

import ButtonLink from './common/ButtonLink'

import search from '../icons/search.svg'

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  width: 70%;
  margin: 0 auto;
`

const Wrapper = styled.div`
  background-color: white;
  width: 60%;

  @media (max-width: 720px) {
    width: 100%;
  }

  display: flex;
  margin: 2rem auto;
  padding: 0.5rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.08);
  }
`
const InputContainer = styled.div`
  flex: 1
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
  text-align: center;
`
const SeparatorContainer = styled.div`
  display: flex;
  align-items: center;
  height: 2rem;
`
const Separator = styled.p`
  font-size: 1rem;
  font-family: 'Noto Sans', sans-serif;
`

type Props = {
  to: { pathname: string, search: string },
  user: string,
  repo: string,
  onChange: (e: Object) => any
}

const SearchBar = ({ onChange, user, repo, to }: Props) =>
  <Container>
    <Wrapper>
      <InputContainer>
        <Input onChange={onChange} name="user" value={user} type="text" placeholder="user" />
      </InputContainer>
      <SeparatorContainer>
        <Separator>/</Separator>
      </SeparatorContainer>
      <InputContainer>
        <Input onChange={onChange} name="repo" value={repo} type="text" placeholder="repo" />
      </InputContainer>
      <ButtonLink to={to}>
        <img src={search} alt="search" />
      </ButtonLink>
    </Wrapper>
  </Container>

export default SearchBar
