import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'

type Props = {
  children: any,
  component: string,
  animationName: string
}

const AnimatedContainer = ({ children, component, animationName }: Props) => (
  <CSSTransitionGroup
    component={component}
    transitionName={animationName}
    transitionAppear
    transitionAppearTimeout={500}
    transitionEnterTimeout={500}
    transitionLeaveTimeout={500}
  >
    {children}
  </CSSTransitionGroup>
)

export default AnimatedContainer
