// @flow
import React from 'react'
import styled from 'styled-components'

import githubLogo from '../icons/github.svg'

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #1e2c42;
  height: 5rem;
  padding: 2rem 10%;
  width: 80%;
`

const HeaderTitle = styled.h1`
  color: #fff;
  font-family: 'Noto Sans', sans-serif;
  text-align: center;
  padding-left: 10px;
`

const Header = () =>
  (<HeaderContainer>
    <img src={githubLogo} alt="github" />
    <HeaderTitle>Github Issue Tracker</HeaderTitle>
  </HeaderContainer>)

export default Header
