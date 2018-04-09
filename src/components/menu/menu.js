import React from 'react'
import styled, { keyframes } from 'styled-components'
import Link from 'gatsby-link'
import theme from '../theme'
import { VisuallyHidden } from '../'

const animations = {
    topOpen: keyframes`
        0% {transform: translateY(1.875em) rotate(0deg); background-image: var(--background-image-ltr);}
        50% {transform: translateY(var(--top-translate-y--closed)) rotate(0deg);}
        95%, 100% {transform: translateY(var(--top-translate-y--closed)) rotate(45deg); background-image: var(--background-image-rtl);}
    `,
    bottomOpen: keyframes`
        0% {transform: translateY(-1.875em) rotate(0deg); background-image: var(--background-image-ltr);}
        50% {transform: translateY(var(--bottom-translate-y--closed)) rotate(0deg);}
        95%, 100% {transform: translateY(var(--bottom-translate-y--closed)) rotate(-45deg); background-image: var(--background-image-rtl);}
    `,
    middleOpen: keyframes`
        0%, 30% {opacity: 1;}
        50%, 100% {opacity: 0;}
    `,
    topClosed: keyframes`
        0%, 5% {transform: translateY(var(--top-translate-y--closed)) rotate(45deg); background-image: var(--background-image-rtl);}
        50% {transform: translateY(var(--top-translate-y--closed)) rotate(0deg);}
        100% {transform: translateY(1.875em) rotate(0deg); background-image: var(--background-image-ltr);}
    `,
    bottomClosed: keyframes`
        0%, 5% {transform: translateY(var(--bottom-translate-y--closed)) rotate(-45deg); background-image: var(--background-image-rtl);}
        50% {transform: translateY(var(--bottom-translate-y--closed)) rotate(0deg);}
        100% {transform: translateY(-1.875em) rotate(0deg); background-image: var(--background-image-ltr);}
    `,
    middleClosed: keyframes`
        0%, 50% {opacity: 0;}
        70%, 100% {opacity: 1;}
    `
}
const StyledMenu = styled.div`
    background: ${theme.backgroundColor};
    color: ${theme.fontColorInverse};
    padding: ${theme.paddingMd} ${theme.paddingMd} ${theme.paddingLg};
    transform: ${props => props.isClosed ? 'translateY(-100%)' : 'translateY(0)'};
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

// color: ${props => props.primary ? 'white' : 'palevioletred'};

const StyledButton = styled.button`
    background: transparent;
    border: none;
    color: ${theme.fontColorInverse};
    position: absolute;
    right: 2%;
    top: 125%;

    &:hover {
        cursor: pointer;
    }

    &:focus {
        outline: none;
    }
`

const MenuLine = styled.span`
    background-color: #08AEEA;
    background-image: linear-gradient(270deg, #08AEEA 0%, #2AF598 100%);
    border-radius: 0.75em;
    box-shadow: 0px 0px 20px 0 rgba(0,0,0,0.3);
    display: block;
    height: 0.125rem;
    transform-origin: center;
    width: 2rem;
    z-index: 10;

    transform: ${props => {
        if (props.menuLineTop) {
            if(!props.isClosed) {
                return 'translateY(0.125rem) rotate(45deg)';
            } else {
                return 'translateY(0.55rem) rotate(0deg)';
            }
        } else if (props.menuLineBottom) {
            if(!props.isClosed) {
                return 'translateY(-0.125rem) rotate(-45deg)';
            } else {
                return 'translateY(-0.55rem) rotate(0deg)';
            }
        } else if (props.menuLineMiddle) {
            if(!props.isClosed) {
                return 'translate(0, -0.125rem)';
            }
        }
    }};

    opacity: ${props => {
        if (props.menuLineMiddle && !props.isClosed) {
            return '0';
        } else {
            return '1';
        }
    }}
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
                        <StyledButton onClick={handleClick} isClosed={this.state.closed}>
                            <VisuallyHidden>Menu</VisuallyHidden>
                            {/*Need to make these their own components*/}
                            <MenuLine menuLineTop isClosed={this.state.closed} />
                            <MenuLine menuLineMiddle isClosed={this.state.closed} />
                            <MenuLine menuLineBottom isClosed={this.state.closed} />
                        </StyledButton>
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