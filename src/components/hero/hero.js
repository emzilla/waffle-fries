import React from 'react'
import styled from 'styled-components'
import theme from '../theme'

const Hero = styled.section`
  max-height: 100%;
  max-width: 90vw;
  position: relative;
  text-align: right;
  transition: height 0.3s ease-in;

  @media (min-width: 62rem) {
    max-width: 100%;
    margin-right: auto;
    width: 60%;
  }

  &:before {
    background:${theme.secondaryColor};
    content: '';
    height: 100%;
    left: 5%;
    opacity: 0;
    position: absolute;
    transition: opacity 0.3s ease-in;
    top: 30%;
    width: 100%;
    z-index: -1;

    @media (min-width: 62rem) {
      opacity: 1;
      width: 120%;
    }
  }

   > img {
    opacity: 0;
    max-height: 0;
    transition: all 0.3s ease-in;

    @media (min-width: 30rem) {
      opacity: 1;
      max-height: 100%;
    }
  }

  h1 {
    font-size: 3rem;
    line-height: 0.9;
    letter-spacing: 0.05rem;
    max-width: 18rem;
    z-index: 3;

    @media (min-width: 30rem) {
      font-size: 4rem;
      position: absolute;
      right: 2%;
      bottom: 4%;
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