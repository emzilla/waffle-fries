import React from 'react'
import theme from './theme'

import { injectGlobal } from 'styled-components'

injectGlobal`
  html {
    height: 100%;
  }

  body {
    height: 100%;
    background-color: #ffffff;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23eaf4f1' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    color: ${theme.fontColor};
    letter-spacing: 0.025rem;

    // Keep nested gatsby divs at 100% height
    > *,
    > * > * {
      height: 100%;
    }
  }

  img {
    height: auto;
    max-width: 100%;
  }

  a {
    color: ${theme.fontColor};
    text-decoration-skip-ink: auto;
    transition: color ${theme.baseTransitionTiming} ${theme.baseTransitionEasing};    

    &:visited {
        color: ${theme.fontColor};
    }

    &:hover {
        cursor: pointer;
    }

    &:hover, &:focus {
        color: ${theme.accentColor};
    }
  }
`

export Button from './button/button'
export Breadcrumbs from './breadcrumbs/breadcrumbs'
export ButtonRight from './button/button-right'
export Container from './container/container'
export HeroContainer from './container/hero-container'
export Content from './content/content'
export ContentContainer from './content/content-container'
export ContentGreen from './content/content-green'
export ContentPink from './content/content-pink'
export ContentPinkAlt from './content/content-pink-alt'
export Heading from './heading/heading'
export Hero from './hero/hero'
export Menu from './menu/menu'
export Layout from './layout/layout'
export LayoutFlex from './layout/layout-flex'
export Logo from './logo/logo'
export FeaturedContent from './featured-content/featured-content'
export VisuallyHidden from './helpers/visuallyhidden.js'