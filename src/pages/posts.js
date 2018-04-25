import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { 
  theme,
  Container,
  ContentContainer,
  ContentPinkAlt,
  Layout
} from '../components/'

class PostsList extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <Layout>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
        <Container>
          {posts.map(post => {
            if (post.node.path !== '/404/') {
              const title = get(post, 'node.frontmatter.title') || post.node.path
              return (
                <ContentPinkAlt key={post.node.frontmatter.path}>
                  <ContentContainer>
                  <h1>
                    <Link to={post.node.frontmatter.path} >
                      {post.node.frontmatter.title}
                    </Link>
                  </h1>
                  <small>{post.node.frontmatter.date}</small>
                  <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
                  </ContentContainer>
                </ContentPinkAlt>
              )
            }
          })}
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