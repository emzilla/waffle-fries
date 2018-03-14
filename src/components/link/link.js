import React from 'react'
import styled from 'styled-components'
import theme from '../theme'

const ALink = styled.a`
    text-decoration-skip-ink: auto;

    &:visited {
        color: ${theme.fontColor};
    }

    &:hover {
        cursor: pointer;
    }

    &:hover, &:focus {
        color: ${theme.accentColor};
    }
`

export default ALink
