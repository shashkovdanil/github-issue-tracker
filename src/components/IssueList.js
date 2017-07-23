import React, { Component, PureComponent } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { CSSTransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import slug from 'slug';

const Issue = styled.li`
  font-family: 'Lato', sans-serif;
  padding: 1rem;
  list-style-type: circle;
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
  background-color: white;
`;

class IssueList extends PureComponent {
  render() {
    return (
      <Main>
        <List>
          <CSSTransitionGroup
            component="Issue"
            transitionName="slide"
            transitionAppear
            transitionAppearTimeout={500}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            {this.props.issues.map(issue =>
              <Issue key={issue.title}>
                <StyledLink to={{ pathname: `/details/${slug(issue.number)}` }}>
                  {issue.title}
                </StyledLink>
              </Issue>
            )}
          </CSSTransitionGroup>
        </List>
      </Main>
    )
  }
}

// const IssueList = ({ issues }) =>
//   <Main>
//     <List>
//       <CSSTransitionGroup
//         component="Issue"
//         transitionName="slide"
//         transitionAppear
//         transitionAppearTimeout={500}
//         transitionEnterTimeout={500}
//         transitionLeaveTimeout={500}
//       >
//         {issues.map(issue =>
//           <Issue key={issue.title}>
//             <StyledLink to={{ pathname: `/details/${slug(issue.number)}` }}>
//               {issue.title}
//             </StyledLink>
//           </Issue>
//         )}
//       </CSSTransitionGroup>
//     </List>
//   </Main>;

const mapStateToProps = ({ issues }) => ({
  issues: issues.issuesList
});

export default withRouter(connect(mapStateToProps)(IssueList));
