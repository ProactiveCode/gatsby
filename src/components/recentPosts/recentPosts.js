import * as React from 'react'
import * as Styles from './recentPosts.module.scss'
import { StaticQuery, graphql, Link } from "gatsby"
import c from 'classnames'

const Layout = ({ section }) => {
	return (
		<StaticQuery
		query={graphql`
		  query HeadingQuery {
			allContentfulBlogPost(
				sort: {fields: Blogcontent___references___createdAt, order: ASC}
			  ) {
				nodes {
					blogTitle
					id
					slug
					excerpt {
						excerpt
					}
				}
			}
		  }
		`}
		render={data => (
			<section data-id={section.sectionInfo[0].identifier} className={c("section", section.sectionInfo[0].bgColor, "section_" + section.sectionInfo[0].size)} style={ section.sectionInfo[0].image ? { backgroundImage:  `url("${section.sectionInfo[0].image}")`} : {}}>
				<div className={c(Styles.recentPosts)}>
					<div className={c(Styles.recentPostsWrap)}>
						{data.allContentfulBlogPost.nodes.map((node) => (
							<article key={node.id}>
								<Link to={`/blog/${node.slug}`}><h3>{node.blogTitle}</h3></Link>
								<p>{node.excerpt.excerpt}</p>
							</article>
						))}
					</div>
				</div>
			</section>
		)}
	  />
	)
}

export default Layout