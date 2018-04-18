import React from 'react'
import styled from 'styled-components'
import theme from '../theme'

const Hero = styled.section`
  max-width: 90vw;

  @media (min-width: 60rem) {
    position: relative;
    max-width: 40vw;
    margin-right: auto;
    height: 25vw;
  }

   > img {
    
    display: none;

    @media (min-width: 60rem) {
      display: block;
      position: absolute;
    }
  }

  h1 {
    font-size: 3rem;
    line-height: 0.9;
    letter-spacing: 0.05rem;
    z-index: 3;

    @media (min-width: 60rem) {
      font-size: 4rem;
      left: 1.5rem;
      max-width: 18rem;
      position: absolute;
      right: 0.5rem;
      top: 0.75rem;
      text-align: right;
    }
  }

  a {
    color: ${theme.fontColor};
    text-decoration: none;

    &:hover,
    &:focus,
    &:visited {
      color: ${theme.fontColor};
    }

    @media (min-width: 60rem) {
      color: ${theme.fontColorInverse};

      &:hover,
      &:focus,
      &:visited {
        color: ${theme.secondaryColor};
      }
    }
  }
`

export default Hero