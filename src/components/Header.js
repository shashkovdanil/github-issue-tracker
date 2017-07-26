import React from 'react';
import styled from 'styled-components';

import githubLogo from '../icons/github.svg';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  justify-content: center;
  background-color: #1e2c42;
  height: 5rem;
  padding: 2rem;
`;

const HeaderLogo = styled.img`padding: 0 0.5rem 0 0;`;

const HeaderTitle = styled.h1`
  color: #fff;
  padding-left: 0.5rem;
  font-family: 'Noto Sans', sans-serif;
`;

const Header = () =>
  (<HeaderContainer>
    <HeaderLogo src={githubLogo} alt="github" />
    <HeaderTitle>Github Issue Tracker</HeaderTitle>
  </HeaderContainer>);

export default Header;
