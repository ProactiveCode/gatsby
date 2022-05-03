import * as React from "react"
import { Link,graphql } from 'gatsby'
import Layout from '../../components/header/header'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const blog = ({data}) => {
    console.log(data.allFile.nodes);
    data.allFile.nodes.map((node) => (
      console.log(node.childMdx.id)
    ))
    return (
      <main>
          <Layout pageTitle="Blog">
          </Layout>
        <title>Blog</title>
        <h1>Blog</h1>

        <ul>
          {
            data.allFile.nodes.map((node) => (
              <article key={node.childMdx.id}>
                <GatsbyImage image={getImage(node.childMdx.frontmatter.hero_image)} alt={node.childMdx.frontmatter.hero_image_alt} />
                <h2>{node.childMdx.frontmatter.title}</h2>
                <Link to={`/blog/${node.childMdx.slug}`} className>{node.childMdx.frontmatter.title}</Link>
              </article>
            ))
          }
          </ul>
      </main>
    )
  }

  export const query = graphql`
  query {
    allFile(
      filter: {sourceInstanceName: {eq: "blog"}, ext: {eq: ".mdx"}}
      sort: {fields: childrenMdx___frontmatter___date, order: DESC}
    ) {
      nodes {
        childMdx {
          frontmatter {
            title
            date
            excerpt
            hero_image_alt
            hero_image {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          slug
          id
        }
      }
    }
  }
`
  // Step 3: Export your component
  export default blog