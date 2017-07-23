import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button`
  width: 2rem;
  height: 2rem;
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
`;

const ButtonLink = ({ to, onClick, children }) => (
  <Button onClick={onClick}>
    <Link to={to}>{children}</Link>
  </Button>
);

export default withRouter(ButtonLink);
