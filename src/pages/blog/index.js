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
			<Section identifier="test" bgcolour="grey" smaller="sectionSmall">
				<div className={c('blogHome')}>
					<Title line="linePink" containerSize="container800" align="left">
						<h3 className={"large"}>Passion in<br></br>what we do</h3>
					</Title>
					<div className={c('container', 'container800')}>
						<p>The team like to stay up to date on current trends in design, development and anything digital. There are some topics the team believe are worth sharing with you, so they have put together some articles to help inspire passion and creativity.</p>
						<StaticImage width={800} alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera" src="../images/carbon.png" />
					</div>
				</div>
				<div className={c('container', 'container1000', 'blogArticles')}>
					{
						data.allFile.nodes.map((node) => (
							<article key={node.childMdx.id}>
								<Link to={`/blog/${node.childMdx.slug}`}><h3>{node.childMdx.frontmatter.title}</h3></Link>
								<p>{node.childMdx.frontmatter.excerpt}</p>
								<div className="articleInfo">
									<p><strong>{node.childMdx.frontmatter.author}</strong></p>
									<p><em>{node.childMdx.frontmatter.author_role}</em></p>
									<p><strong>{node.childMdx.frontmatter.date}</strong></p>
									<p><em>{node.childMdx.frontmatter.keywords}</em></p>
								</div>
							</article>
						))
					}
				</div>
			</Section>
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