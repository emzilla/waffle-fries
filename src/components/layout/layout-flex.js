import React from 'react'
import styled from 'styled-components'
import theme from '../theme'
import Layout from './layout'

const LayoutFlex = Layout.extend`
    @media (min-width: 30rem) {
        align-items: center;
        display: flex;
        justify-content: center;
    }
`

export default LayoutFlex