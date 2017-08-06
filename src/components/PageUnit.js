// @flow
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

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
  background-color: ${(props) => (props['data-active'] ? 'aquamarine' : 'white')};
`

type Props = {
  to: { pathname: string, search: string },
  active: boolean,
  children: any
}

const PageUnit = ({ to, active, children }: Props) =>
  <A data-active={active} to={to}>
    {children}
  </A>

export default PageUnit
