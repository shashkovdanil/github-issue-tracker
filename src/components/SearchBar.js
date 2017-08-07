// @flow
import React, { PureComponent } from 'react'
import styled from 'styled-components'

import ButtonLink from './common/ButtonLink'

import search from '../icons/search.svg'

const Wrapper = styled.div`
  background-color: white;
  ${'' /* width: 40%;

  @media (max-width: 720px) {
    width: 60%;
  } */} display: flex;
  ${'' /* margin: 2rem auto;
  padding: 0.5rem; */} transition: all 0.2s ease-in-out;

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

const Ul = styled.ul`
  margin: 0;
  height: 170px;
  overflow: auto;
  background-color: white;
  padding-left: 10px;
  padding-right: 10px;
`
const Item = styled.li`
  list-style-type: none;
  margin: 10px 0;
  font-size: 1rem;
  font-family: 'Noto Sans', sans-serif;
  cursor: pointer;
`

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  width: 40%;
  margin-left: 30%;
`
const RepoAndSearch = styled.div`
  display: flex;
  flex-direction: column;
`

type Props = {
  to: { pathname: string, search: string },
  user: string,
  repo: string,
  changeUser: (e: Object) => any,
  changeRepo: (e: Object) => any
}

class SearchInput extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      repoValue: this.props.repo || ''
    }
  }

  render () {
    const { changeUser, changeRepo, getAutocompleteRepos, autocompleteRepos, user, repo, to } = this.props
    return (
      <Container>
        <Wrapper>
          <div>
            <Input onChange={changeUser} value={user} type="text" placeholder="user" />
          </div>
          <SeparatorContainer>
            <Separator>/</Separator>
          </SeparatorContainer>
        </Wrapper>
        <RepoAndSearch>
          <Input
            onChange={changeRepo}
            onFocus={getAutocompleteRepos}
            value={this.state.repoValue}
            type="text"
            placeholder="repo"
          />
          {autocompleteRepos.length > 0
            ? <Ul>
                {autocompleteRepos.map((i) =>
                  <Item onClick={changeRepo}>
                    {i}
                  </Item>
                )}
              </Ul>
            : null}
        </RepoAndSearch>
        <ButtonLink to={to}>
          <img src={search} alt="search" />
        </ButtonLink>
      </Container>
    )
  }
}

export default SearchInput
