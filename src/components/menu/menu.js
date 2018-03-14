import React from 'react'
import styled from 'styled-components'
import theme from '../theme'

const Menu = styled.div`
    background: ${theme.backgroundColor};
    color: ${theme.fontColorInverse};
    padding: ${theme.paddingMd} ${theme.paddingMd} ${theme.paddingLg};

    ul {
        display: flex;
        list-style: none;
        padding: 0;
        margin: 0;
    }

    ul li {
        padding-left: ${theme.paddingMd};
        padding-right: ${theme.paddingMd};
    }

    a {
        text-decoration: none;

        &:hover,
        &:focus,
        &:visited {
            color: #fff;
        }
    }
`

export default Menu