import React from 'react'
import styled from 'styled-components'
import theme from '../theme'

const Hero = styled.section`
  max-height: 100%;
  max-width: 90vw;
  position: relative;
  transition: height 0.3s ease-in;

  @media (min-width: 62rem) {
    max-width: 100%;
    margin-right: auto;
    width: 75%;
  }

  &:before {
    background:${theme.secondaryColor};
    content: '';
    height: 0;
    left: 5%;
    opacity: 0;
    position: absolute;
    transition: opacity 0.3s ease-in;
    top: 30%;
    width: 100%;
    z-index: -1;

    @media (min-width: 62rem) {
      height: 100%;
      opacity: 1;
      width: 120%;
    }
  }

   > img {
    max-height: 100%;
    margin-bottom: 0;
  }

  h1 {
    font-size: 2.5rem;
    position: absolute;
    bottom: 2%;
    left: 2%;
    text-align: left;
    line-height: 0.9;
    letter-spacing: 0.05rem;
    max-width: 18rem;
    z-index: 3;
    mix-blend-mode: overlay;

    @media (min-width: 30rem) {
      font-size: 4rem;
      text-align: right;
      left: unset;
      right: 2%;
      bottom: 4%;
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

    @media (min-width: 30rem) {
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