import React from 'react'
import styled from 'styled-components'
import theme from '../theme'
import Content from './content'

const ContentPinkAlt = Content.extend`
  padding: 5rem;
  
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
    max-width: 70vw;
  }
`

export default ContentPinkAlt