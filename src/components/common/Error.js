import React from 'react'
import styled from 'styled-components'

const ErrorMessage = styled.p`
  font-family: 'Noto Sans', sans-serif;
  text-align: center;
  font-size: 1.2rem;
`

type Props = {
  children: any
}

const Error = ({ children }: Props) => (
  <ErrorMessage>
    {children}
  </ErrorMessage>
)

export default Error
