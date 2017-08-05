import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { urlHelper } from '../utils';

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
  background-color: ${props => (props['data-active'] ? 'aquamarine' : 'white')}
`;

const PerPageBlock = ({ query, activePage }) => {
  const perPage = [10, 30, 50]
  return (
    <Wrapper>
      <PaginationBlock>
        {perPage.map(i => <A
          data-active={+activePage === i}
          to={urlHelper(query, 1, i)}
        >
          {i}
        </A>)}
      </PaginationBlock>
    </Wrapper>
  );
};

export default PerPageBlock;
