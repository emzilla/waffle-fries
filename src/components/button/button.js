import React from 'react'
import styled from 'styled-components'
import theme from '../theme'

const Button = styled.button`
  background: transparent;
  border: ${theme.primaryBorder};
  border-image: ${theme.gradientBorder};
  border-image-slice: 1;
  color: ${theme.fontColor};
  display: block;
  margin: ${theme.marginLg} 0 0;
  padding: ${theme.paddingSm} ${theme.paddingXl};

  &:hover {
    cursor: pointer;
  }
`

export default Button
