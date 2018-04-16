import React from 'react'
import styled from 'styled-components'
import theme from '../theme'

const Breadcrumbs = styled.div`
    a {
        color: ${theme.accentColor};
        font-size: 0.75rem;
        text-decoration: none;

        &:hover,
        &:focus,
        &:visited {
            color: ${theme.accentColor};
            text-decoration: none;
        }
    }

    
`

export default Breadcrumbs
