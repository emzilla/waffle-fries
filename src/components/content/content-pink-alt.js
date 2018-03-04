import React from 'react'
import styled from 'styled-components'
import theme from '../theme'
import Content from './content'

const ContentPinkAlt = Content.extend`
  &:before {
    background: ${theme.reverseGradient};
    content: '';
    display: block;
    height: 8rem;
    position: absolute;
    top: -2rem;
    right: -2rem;
    width: 8rem;
    z-index: -3;
  }

  &:after {
    background:${theme.primaryColor80};
    bottom: 5%;
    content: '';
    height: 100%;
    position: absolute;
    left: 0;
    top: 5%;
    width: 100%;
    z-index: -1;
  }

  @media (min-width: 44rem) {
    max-width: 65vw;
  }
  
`

export default ContentPinkAlt