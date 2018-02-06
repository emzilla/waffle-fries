import React from 'react'
import styled from 'styled-components'
import theme from '../theme'

const Content = styled.section`
  line-height: 1.3;
  letter-spacing: 0.025rem;
  max-width: 90vw;
  padding: 4rem;
  position: relative;

  @media (min-width: 44rem) {
    max-width: 60vw;
  }
`

export default Content