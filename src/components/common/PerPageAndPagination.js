// @flow
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 0 1rem;
  text-align: center;
  box-sizing: border-box;
`

const PaginationBlock = styled.div`
  display: inline-block;
  box-sizing: border-box;
  background-color: white;
`
type Props = {
  children: any
}

const PerPageAndPagination = ({ children }: Props) => (
    <Wrapper>
      <PaginationBlock>
        {children}
      </PaginationBlock>
    </Wrapper>
  )

export default PerPageAndPagination
