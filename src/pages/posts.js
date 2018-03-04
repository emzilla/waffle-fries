import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { 
  theme,
  Container,
  Layout,
  ALink
} from '../components/'

class PostsList extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <Layout>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
        <Container>
            <h1>Posts will go here</h1> 
            <p>Link to creating post lists <ALink href="https://www.gatsbyjs.org/docs/adding-a-list-of-markdown-blog-posts/">https://www.gatsbyjs.org/docs/adding-a-list-of-markdown-blog-posts/</ALink></p>    
        </Container>
      </Layout>
    )
  }
}

PostsList.propTypes = {
  route: React.PropTypes.object,
}

export default PostsList

export const pageQuery = graphql`
  query PostsListQuery {
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