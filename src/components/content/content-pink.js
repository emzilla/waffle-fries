import React from 'react'
import styled from 'styled-components'
import theme from '../theme'
import Content from './content'

const ContentPink = Content.extend`

  &:after {
    background:${theme.primaryColor90};
    content: '';
    height: 100%;
    position: absolute;
    right: 5%;
    top: 5%;
    width: 80%;
    z-index: -1;
  }

  @media (min-width: 44rem) {
    max-width: 70vw;
  }
`

export default ContentPink