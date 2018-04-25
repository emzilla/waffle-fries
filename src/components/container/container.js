import React from 'react'
import styled from 'styled-components'
import theme from '../theme'

const Container = styled.div`
    margin: 0 auto; 
    max-width: 90%;

    @media (min-width: 60rem) {
        max-width: 70vw;
    }
    
    &:not(:last-child) {
        padding-bottom: 5rem;
    }
`

export default Container
