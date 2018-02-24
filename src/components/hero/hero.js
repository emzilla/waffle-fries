import React from 'react'
import styled from 'styled-components'
import theme from '../theme'

const Hero = styled.section`
  max-width: 90vw;

  @media (min-width: 50rem) {
    position: relative;
    max-width: 40vw;
    margin-right: auto;
    height: 25vw;
  }

   > img {
    @media (min-width: 50rem) {
      position: absolute;
    }
  }

  h1 {
    position: absolute;
    top: 0.75rem;
    right: 0.5rem;
    z-index: 3;
    max-width: 18rem;
    text-align: right;
    font-size: 3rem;
    line-height: 0.9;
    letter-spacing: 0.05rem;

    @media (min-width: 60rem) {
      left: 1.5rem;
      font-size: 4rem;
    }
  }

  a {
    text-decoration: none;
    color: #fff;

    &:hover,
    &:focus,
    &:visited {
      color: #f2f2f2;
    }
  }
`

export default Hero