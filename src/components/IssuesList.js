import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { CSSTransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import format from 'date-fns/format';

const Issue = styled.li`
  display: flex;
  font-family: 'Lato', sans-serif;
  padding: 1rem;
  list-style-type: none;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  color: #1e2c42;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ghostwhite;
`;

const List = styled.ul`
  margin: 0;
  width: 60%;
  padding: 0;
  background-color: white;
`;

const Description = styled.p`
  font-family: 'Lato', sans-serif;
  color: gray;
  font-size: 0.8rem;
`;

const Avatar = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  margin-right: 1rem;
`;

const WrapperAvatarAndTitle = styled.div`
  display: flex;
  align-items: center;
`;

const IssuesList = ({ issues, query }) =>
  <Main>
    <List>
      <CSSTransitionGroup
        component="Issue"
        transitionName="fade"
        transitionAppear
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
      >
        {issues.map(issue =>
          <Issue key={issue.title}>
            <WrapperAvatarAndTitle>
              <a href={issue.user.url}>
                <Avatar src={issue.user.avatar} alt={issue.user.name} />
              </a>
              <StyledLink to={{ pathname: `/details/${issue.number}`, search: query }}>
                {issue.title}
              </StyledLink>
            </WrapperAvatarAndTitle>
            <Description>{`#${issue.number} opened on ${format(issue.createdAt, 'Do MMM')}`}</Description>
          </Issue>
        )}
      </CSSTransitionGroup>
    </List>
  </Main>;

const mapStateToProps = ({ issues }) => ({
  issues: issues.issuesList
});

export default connect(mapStateToProps)(IssuesList);
