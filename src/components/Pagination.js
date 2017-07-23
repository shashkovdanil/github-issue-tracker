import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Wrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  box-sizing: border-box;
`;

const PaginationBlock = styled.div`
  display: inline-block;
  box-sizing: border-box;
  background-color: white;
`;

const A = styled(Link)`
  position: relative;
  float: left;
  padding: 7px 12px;
  margin-left: -1px;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  color: #1e2c42;
  text-decoration: none;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  background-color: ${props => props['data-active'] ? 'aquamarine' : 'white'}
`;

const Pagination = ({ pages, query, activePage }) => {
  const pagesArr = [];
  for (let i = 1; i <= pages; i += 1) {
    pagesArr.push(i);
  }
  return (
    <Wrapper>
      <PaginationBlock>
        {pages &&
          pagesArr.map(pageNum =>
            <A
              data-active={activePage === pageNum}
              key={pageNum}
              to={{ pathname: '/', search: `${query}&page=${pageNum}` }}
            >
              {pageNum}
            </A>
          )}
      </PaginationBlock>
    </Wrapper>
  );
};

const mapStateToProps = ({ pages }) => ({ pages });

export default withRouter(connect(mapStateToProps)(Pagination));
