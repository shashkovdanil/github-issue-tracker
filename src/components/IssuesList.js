// @flow
import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'
import format from 'date-fns/format'

import AnimatedContainer from './common/AnimatedContainer'

const Issue = styled.li`
  display: flex;
  font-family: 'Lato', sans-serif;
  padding: 1rem;
  list-style-type: none;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const StyledLink = styled(Link)`
  color: #1e2c42;
  text-decoration: none;
  width: 70%;

  &:hover {
    text-decoration: underline;
  }
`

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ghostwhite;
`

const Title = styled.p`
  word-wrap: break-word;
  width: 100%;
`

const List = styled.ul`
  @media (max-width: 886px) {
    width: 100%;
  }

  margin: 0;
  width: 60%;
  padding: 0;
  background-color: white;
`

const Description = styled.p`
  font-family: 'Lato', sans-serif;
  color: gray;
  font-size: 0.8rem;
`

const Avatar = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  margin-right: 1rem;
`

const WrapperAvatarAndTitle = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
`

type Props = {
  issues: Array<Object>,
  query: string
}

const IssuesList = ({ issues, query }: Props) =>
  <Main>
    <List>
      <AnimatedContainer component="Issue" animationName="fade">
        {issues.map((issue) =>
          <Issue key={issue.title}>
            <WrapperAvatarAndTitle>
              <a href={issue.user.url}>
                <Avatar src={issue.user.avatar} alt={issue.user.name} />
              </a>
              <StyledLink to={{ pathname: `/details/${issue.number}`, search: query }}>
                <Title>{issue.title}</Title>
              </StyledLink>
            </WrapperAvatarAndTitle>
            <Description>{`#${issue.number} opened on ${format(issue.createdAt, 'Do MMM')}`}</Description>
          </Issue>
        )}
      </AnimatedContainer>
    </List>
  </Main>

const mapStateToProps = ({ issues }) => ({
  issues: issues.issuesList
})

export default connect(mapStateToProps)(IssuesList)
