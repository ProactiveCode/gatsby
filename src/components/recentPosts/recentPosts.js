import * as React from 'react'
import * as Styles from './recentPosts.module.scss'
import { StaticQuery, graphql } from "gatsby"
import c from 'classnames'

const Layout = ({ section }) => {
	const safeID = section.sectionInfo[0].identifier.replace(/\s+/g, '-').replace("'", '').toLowerCase();
	return (
		<StaticQuery
		query={graphql`
		  	query HeadingQuery {
				allContentfulBlogPost(
					sort: {fields: publishedDate, order: DESC}
					limit: 3
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
			<section id={safeID} data-id={section.sectionInfo[0].identifier} className={c("section", section.sectionInfo[0].bgColor, "section_" + section.sectionInfo[0].size)} style={ section.sectionInfo[0].image ? { backgroundImage:  `url("${section.sectionInfo[0].image}")`} : {}}>
				<div className={c(Styles.recentPosts, 'container', 'container1000')}>
					<div className={c(Styles.recentPostsWrap)}>
						{data.allContentfulBlogPost.nodes.map((node) => (
							<a className={Styles.articleWrap} href={`/blog/${node.slug}`}>
								<article key={node.id}>
									<h3>{node.blogTitle}</h3>
									<p>Read this</p>
								</article>
							</a>
						))}
					</div>
				</div>
			</section>
		)}
	  />
	)
}

export default Layout