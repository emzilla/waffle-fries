import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import theme from '../theme'

const StyledMenu = styled.div`
    background: ${theme.backgroundColor};
    color: ${theme.fontColorInverse};
    padding: ${theme.paddingMd} ${theme.paddingMd} ${theme.paddingLg};
    transform: ${props => props.isClosed ? 'translateY(-75%)' : 'translateY(0)'};
    transition: transform ${theme.baseTransitionTiming} ${theme.baseTransitionEasing};

    ul {
        align-items: baseline;
        display: flex;
        line-height: 1;
        list-style: none;
        padding: 0;
        margin: 0;
    }

    li {
        margin-bottom: 0;
        padding-left: ${theme.paddingMd};
        padding-right: ${theme.paddingMd};

        &:first-of-type {
            font-family: 'Playfair Display', 'Georgia', 'serif';
            font-size: 1.5rem;
        }

        &:not(:first-of-type) {
            letter-spacing: 0.045rem;
        }

        &:last-of-type {
            margin-left: auto;
        }
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

const StyledButton = styled.button`
    color: ${theme.fontColorInverse};
    background: transparent;

    &:hover {
        cursor: pointer;
    }
`

class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            closed: true
        }
        this.toggleClosed = this.toggleClosed.bind(this)
    }

    toggleClosed() {
        this.setState({ closed: !this.state.closed })
    }

    render() {
        const { links, isClosed } = this.props

        const handleClick = event => {
            event.preventDefault()
            this.toggleClosed()
        }

        return (
            <StyledMenu onClick={handleClick} isClosed={this.state.closed}>
                <ul>
                    {links.map((link, index) => <li key={index}><Link to={link.path}>{link.name}</Link></li>)}
                    <li>
                        <StyledButton onClick={handleClick} isClosed={this.state.closed}>Close Menu</StyledButton>
                    </li>
                </ul>
            </StyledMenu>  
        )
    }
}

Menu.defaultProps = {
    isClosed: true
}

export default Menu