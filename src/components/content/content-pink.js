import React from 'react'
import styled from 'styled-components'
import theme from '../theme'
import Content from './content'

const ContentPink = Content.extend`
  position: relative;
  z-index: 2;

  @media (min-width: 60rem) {
    margin-left: auto;
  }

  &:after {
    background:${theme.primaryColorTransparent};
    content: '';
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    z-index: -1;

    @media (min-width: 50rem) {
      width: 75%;
      right: 5%;
      top: 5%;
    }
  }
`

export default ContentPink