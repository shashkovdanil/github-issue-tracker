import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 0 1rem 0 1rem;
  text-align: center;
  box-sizing: border-box;
`;

const PaginationBlock = styled.div`
  display: inline-block;
  box-sizing: border-box;
  background-color: white;
`;

const PerPageAndPagination = ({ children}) => {
  return (
    <Wrapper>
      <PaginationBlock>
        {children}
      </PaginationBlock>
    </Wrapper>
  );
};

export default PerPageAndPagination;
