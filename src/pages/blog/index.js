import * as React from "react"
import { Link,graphql } from 'gatsby'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import Section from '../../components/section/section'
import Title from '../../components/title/title'
import { Helmet } from "react-helmet"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import c from 'classnames'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const blog = ({data}) => {
console.log(data);
    return (
     	<main>
         	<Helmet>
				<title>Blog</title>
				<meta name="title" content="title"></meta>
				<meta name="description" content="desc"></meta>
				<meta name="keywords" content="keywords"></meta>
			</Helmet>
			<Header pageTitle="Home Page">
				<p>I'm making this by following the Gatsby Tutorial.</p>
			</Header>
		
			<Footer></Footer>
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
			author
			author_role
			keywords
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