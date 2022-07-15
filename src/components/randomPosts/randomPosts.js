import * as React from 'react'
import * as Styles from './randomPosts.module.scss'
import { StaticQuery, graphql } from "gatsby"
import c from 'classnames'

const Layout = () => {
	return (
		<StaticQuery
		query={graphql`
		  	query RelatedPosts {
				allContentfulBlogPost(
					sort: {fields: Blogcontent___references___createdAt, order: ASC}
					limit: 3
				) {
					nodes {
						blogTitle
						id
						slug
					}
				}
		  	}
		`}
		render={data => (
			<section>
				<div>
					<div className={c(Styles.randomPostsWrap)}>
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