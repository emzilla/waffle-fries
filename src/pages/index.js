import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { 
  theme, 
  Button, 
  ButtonRight, 
  Container, 
  Content, 
  ContentContainer,
  ContentGreen, 
  ContentPink, 
  ContentPinkAlt, 
  Heading, 
  Hero, 
  HeroContainer, 
  FeaturedContent,
  LayoutFlex
} from '../components/'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <LayoutFlex>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
        <HeroContainer>
            <Hero>
              <h1>
                <Link to={'/'} >
                  Emily Davidson
                </Link>
              </h1>
              <img src="../../emily-laugh-2.png" alt=""/>
            </Hero>
            <ContentPink homeContent>
              <ContentContainer>
                <h1>...is a creative front-end developer.</h1>
                <p>She values thoughtful experimentation, craft, and great user-focused work all while using her background in design to bring fresh perspective to her process. Currently, Emily is obsessed with React as well as CSS and JavaScript animation. Always up for something new, she has experience with a variety of technologies and tools: creating web apps, mobile apps, and design systems.</p>
              </ContentContainer>
            </ContentPink>
          </HeroContainer>
      </LayoutFlex>
    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object,
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          frontmatter {
            path
            date(formatString: "DD MMMM, YYYY")
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`