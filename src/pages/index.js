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
  ContentGreen, 
  ContentPink, 
  ContentPinkAlt, 
  Heading, 
  Hero, 
  HeroContainer, 
  FeaturedContent,
  Layout
} from '../components/'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <Layout>
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
            <ContentPink>
                <h1>...is a designer and developer</h1>
                <p>And no, she won’t choose one over the other.</p>
                <p>Currently, she’s writing CSS and JavaScript, helping to create a design system in React at InMotionNow. In the past, she has been a web designer, developer, email designer and developer, freelance graphic artist, and animator (it got weird).</p>
                <p>Her work is thoughtfully experimental, and she is always finding a way to be resourceful. She is proud to create well-crafted, fun things on the web.</p>
                <ButtonRight>Click One</ButtonRight>
            </ContentPink>
          </HeroContainer>
      </Layout>
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