import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { 
  theme,
  Container, 
  ContentPinkAlt,
  Layout
} from '../components/'

class About extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <Layout>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
        <Container>
            <ContentPinkAlt>
                <h1>About Me</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus, quae. Delectus quidem optio, necessitatibus esse similique perspiciatis voluptatem quos, reprehenderit voluptate ea corporis aliquid nam quis vel deleniti et rerum.
                Beatae, laborum esse, dignissimos provident alias magnam perferendis vel voluptate error numquam accusamus. Reiciendis pariatur reprehenderit dolor commodi perferendis velit quas ducimus sunt tenetur, corporis eum facere aliquid doloribus molestiae?
                Fugiat obcaecati commodi sed molestiae. Quae pariatur doloremque nesciunt vel ullam reprehenderit assumenda consectetur provident illo nemo? Iure animi velit culpa voluptates, ipsum delectus natus voluptatem nesciunt iusto sit voluptatum!</p>
                <p>Sint quibusdam debitis dolores, temporibus adipisci soluta consequatur esse iusto a quos quae ullam eaque suscipit harum ad delectus quis quasi. Repudiandae, dolorem nam deserunt officia sint necessitatibus quia vero?</p>
                <p>Error cupiditate sit, odit laboriosam minus veritatis at debitis explicabo ipsum est incidunt vel magnam hic ab, quas facilis sed, fugit architecto. Laboriosam doloremque dicta, eum nobis officiis aperiam tempora.</p>
            </ContentPinkAlt>            
        </Container>
      </Layout>
    )
  }
}

About.propTypes = {
  route: React.PropTypes.object,
}

export default About

export const pageQuery = graphql`
  query AboutPageQuery {
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