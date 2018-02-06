import React from 'react'
import styled from 'styled-components'
import theme from '../theme'

const Hero = styled.section`
  max-width: 90vw;
  margin: 5% 0
  position: relative;

  @media (min-width: 44rem) {
   max-width: 40vw; 
  }
`

export default Hero