import React from 'react'
import styled from 'styled-components'
import theme from '../theme'
import Content from './content'

const ContentGreen = Content.extend`
  &:after {
    background:${theme.secondaryColor};
    content: '';
    height: 100%;
    position: absolute;
    left: 5%;
    top: 5%;
    width: 90%;
    z-index: -1;
  }
`

export default ContentGreen