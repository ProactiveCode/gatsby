import * as React from "react"
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'

// Step 2: Define your component
const blog = ({data}) => {
    return (
      <main>
          <Layout pageTitle="Blog">
          </Layout>
        <title>Blog</title>
        <h1>Blog</h1>

        <ul>
          {
            data.allMdx.nodes.map((node) => (
              <article key={node.id}>
                <h2>{node.frontmatter.title}</h2>
                <p>Posted: {node.frontmatter.date}</p>
                <p>Posted: {node.frontmatter.excerpt}</p>
                <MDXRenderer>
                  {node.body}
                </MDXRenderer>
              </article>
            ))
          }
          </ul>
      </main>
    )
  }

  export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
          excerpt
        }
        id
        body
      }
    }
  }
`
  // Step 3: Export your component
  export default blog