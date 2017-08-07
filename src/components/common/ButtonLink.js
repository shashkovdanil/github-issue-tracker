// @flow
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Button = styled.button`
  width: 2rem;
  height: 2rem;
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
`

type Props = {
  to: { pathname: string, search: string },
  children: any
}

const ButtonLink = ({ to, children }: Props) =>
  (<Button>
    <Link to={to}>
      {children}
    </Link>
  </Button>)

export default ButtonLink
