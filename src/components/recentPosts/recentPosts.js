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
			<section data-id={section.sectionInfo[0].identifier} className={c("section", section.sectionInfo[0].bgColor, "section_" + section.sectionInfo[0].size)} style={ section.sectionInfo[0].image ? { backgroundImage:  `url("${section.sectionInfo[0].image}")`} : {}}>
				<div className={c(Styles.recentPosts, 'container', 'container1000')}>
					<div className={c(Styles.recentPostsWrap)}>
						{data.allContentfulBlogPost.nodes.map((node) => (
							<Link className={Styles.articleWrap} to={`/blog/${node.slug}`}>
								<article key={node.id}>
									<h3>{node.blogTitle}</h3>
									<p>Read this</p>
								</article>
							</Link>
						))}
					</div>
				</div>
			</section>
		)}
	  />
	)
}

export default Layout