import React from 'react'
import styled from 'styled-components'
import theme from '../theme'

const Content = styled.section`
  line-height: 1.3;
  letter-spacing: 0.025rem;
  max-width: 90vw;
  padding: 2rem;
  position: relative;

  @media (min-width: 44rem) {
    max-width: 60vw;
    padding: 4rem;
  }

  &:not(:first-of-type) {
    margin-top: ${props => props.homeContent ? '0' : '10rem'};
  }
`

export default Content