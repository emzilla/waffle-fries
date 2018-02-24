import React from 'react'
import styled from 'styled-components'
import theme from '../theme'

const FeaturedContent = styled.section`
  padding: 2rem;
  max-width: 70vw;
  margin: 5% 0;
  position: relative;

  @media (min-width: 44rem) {
    max-width: 90vw;

    &:before {
      background: ${theme.primaryColor};
      content: '';
      display: block;
      height: 20%;
      position: absolute;
      top: -1rem;
      left: -1rem;
      width: 40%;
      z-index: -2;
    }

    &:after {
      background: ${theme.reverseGradient};
      content: '';
      display: block;
      height: 5rem;
      position: absolute;
      top: -2rem;
      left: -2rem;
      width: 5rem;
      z-index: -3;
    }
  }
`

export default FeaturedContent
