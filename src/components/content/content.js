import React from 'react'
import styled from 'styled-components'
import theme from '../theme'

const Content = styled.section`
  line-height: 1.3;
  padding: 2rem;
  position: relative;

  @media (min-width: 44rem) {
    padding: 4rem;
  }

  @media (min-width: 60rem) {
    max-width: 90vw;
  }

  &:not(:first-of-type) {
    margin-top: ${props => props.homeContent ? '0' : '3rem'};
    @media (min-width: 44rem) {
      margin-top: ${props => props.homeContent ? '0' : '6rem'};
    }
  }
`

export default Content