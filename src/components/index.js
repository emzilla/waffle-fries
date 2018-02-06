import React from 'react'

import { injectGlobal } from 'styled-components'

injectGlobal`
  body {
    font-size: 18px;
  }

  img {
    height: auto;
    max-width: 100%;
  }
`

export Button from './button/button'
export ButtonRight from './button/button-right'
export Content from './content/content'
export ContentGreen from './content/content-green'
export ContentPink from './content/content-pink'
export ContentPinkAlt from './content/content-pink-alt'
export Heading from './heading/heading'
export Hero from './hero/hero'
export FeaturedContent from './featured-content/featured-content'