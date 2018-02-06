import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { theme, Button, ButtonRight, Content, ContentGreen, ContentPink, ContentPinkAlt, Heading, Hero, FeaturedContent } from '../components/'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
        <Hero>
          <img src="http://via.placeholder.com/800x600" alt=""/>
        </Hero>
        <Button>Click Me Test</Button>
        <FeaturedContent>
          <img src="http://via.placeholder.com/1000x600" alt=""/>
        </FeaturedContent>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea ipsam quis praesentium. Numquam obcaecati laboriosam veniam expedita eaque alias ex, ipsa eius quaerat, non iure commodi a dolor sint sed!
          <Button>Click One</Button>
          <Button>Click Two</Button>
        </Content>
        <ContentGreen>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea ipsam quis praesentium. Numquam obcaecati laboriosam veniam expedita eaque alias ex, ipsa eius quaerat, non iure commodi a dolor sint sed!
        </ContentGreen>
        <ContentPink>
          <Heading>Some Heading</Heading>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea ipsam quis praesentium. Numquam obcaecati laboriosam veniam expedita eaque alias ex, ipsa eius quaerat, non iure commodi a dolor sint sed!
          <ButtonRight>Content Button</ButtonRight>
        </ContentPink>
        <ContentPinkAlt>
          <Heading>Another Heading</Heading>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea ipsam quis praesentium. Numquam obcaecati laboriosam veniam expedita eaque alias ex, ipsa eius quaerat, non iure commodi a dolor sint sed! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea ipsam quis praesentium. Numquam obcaecati laboriosam veniam expedita eaque alias ex, ipsa eius quaerat, non iure commodi a dolor sint sed!
        </ContentPinkAlt>
      </div>
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