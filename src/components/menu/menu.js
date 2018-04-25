import React from 'react'
import styled, { keyframes } from 'styled-components'
import Link from 'gatsby-link'
import theme from '../theme'
import { VisuallyHidden } from '../'

const animations = {
    topOpen: keyframes`
        0% {transform: translateY(1rem) rotate(0deg);}
        50% {transform: translateY(5px) rotate(0deg);}
        95%, 100% {transform: translateY(5px) rotate(45deg); }
    `,
    bottomOpen: keyframes`
        0% {transform: translateY(-1rem) rotate(0deg);}
        50% {transform: translateY(-5px) rotate(0deg);}
        95%, 100% {transform: translateY(-5px) rotate(-45deg);}
    `,
    middleOpen: keyframes`
        0%, 30% {opacity: 1;}
        50%, 100% {opacity: 0;}
    `,
    topClosed: keyframes`
        0%, 5% {transform: translateY(5px) rotate(45deg);}
        50% {transform: translateY(5px) rotate(0deg);}
        100% {transform: translateY(1rem) rotate(0deg); }
    `,
    bottomClosed: keyframes`
        0%, 5% {transform: translateY(5px) rotate(-45deg);}
        50% {transform: translateY5px) rotate(0deg);}
        100% {transform: translateY(-1rem) rotate(0deg);}
    `,
    middleClosed: keyframes`
        0%, 50% {opacity: 0;}
        70%, 100% {opacity: 1;}
    `
}
const StyledMenu = styled.nav`
    background: ${theme.backgroundColor};
    color: ${theme.fontColorInverse};
    padding: ${theme.paddingLg};
    position: fixed;
    transform: ${props => props.isClosed ? 'translateY(-100%)' : 'translateY(0)'};
    transition: transform ${theme.baseTransitionTiming} cubic-bezier(.63,.4,.69,1);
    width: 100%;

    ul {
        align-items: baseline;
        display: flex;
        line-height: 1;
        list-style: none;
        padding: 0;
        margin: 0;
    }

    li {
        letter-spacing: 0.045rem;
        margin-bottom: 0;
        padding-left: ${theme.paddingMd};
        padding-right: ${theme.paddingMd};

        &:last-of-type {
            margin-left: auto;
        }
    }

    a {
        color: ${theme.fontColorInverse};
        text-decoration: none;
        transition: color ${theme.baseTransitionTiming} ${theme.baseTransitionEasing};

        &:hover {
            color: ${theme.secondaryColor};
        }

        &:focus,
        &:visited {
            color: ${theme.fontColorInverse};
        }
    }
`

const StyledButton = styled.button`
    background: transparent;
    border: none;
    bottom: -120%;
    color: ${theme.fontColorInverse};
    height: 100%;
    padding: 0;
    position: absolute;
    right: 1rem;
    width: 2.5rem;

    &:hover {
        cursor: pointer;
    }

    &:focus {
        outline: none;
    }
`

const MenuLine = styled.span`
    background-color: ${theme.backgroundColor};
    border-radius: 5px;
    display: block;
    height: 5px;
    transform-origin: center;
    width: 2.5rem;
    z-index: 10;

    animation-name: ${props => {
        if (props.menuLineTop) {
            if(!props.isClosed) {
                return animations.topOpen;
            } else {
                return animations.topClosed;
            }
        } else if (props.menuLineBottom) {
            if(!props.isClosed) {
                return animations.bottomOpen;
            } else {
                return animations.bottomClosed;
            }
        } else if (props.menuLineMiddle) {
            if(!props.isClosed) {
                return animations.middleOpen;
            } else {
                return animations.middleClosed;
            }
        }
    }};
    animation-duration: 250ms;
    animation-timing-function: cubic-bezier(.63,.4,.69,1.29);
    animation-iteration-count: 1;
    animation-fill-mode: both;
    animation-direction: alternate;

    transform: ${props => {
        if (props.menuLineTop) {
            if(!props.isClosed) {
                return 'translateY(5px) rotate(45deg)';
            } else {
                return 'translateY(1rem) rotate(0deg)';
            }
        } else if (props.menuLineBottom) {
            if(!props.isClosed) {
                return 'translateY(-5px) rotate(-45deg)';
            } else {
                return 'translateY(-1rem) rotate(0deg)';
            }
        } else if (props.menuLineMiddle) {
            if(!props.isClosed) {
                return 'translate(0, -5px)';
            }
        }
    }};

    opacity: ${props => {
        if (props.menuLineMiddle && props.isClosed) {
            return '1';
        }
    }};
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