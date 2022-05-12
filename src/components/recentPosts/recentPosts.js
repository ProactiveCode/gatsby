import * as React from 'react'
import * as Styles from './recentPosts.module.scss'
import { useStaticQuery, graphql } from "gatsby"
import c from 'classnames'

const Layout = ({ children }) => {
	return (
		<div className={c(Styles.recentPosts)}>
			<div className={c(Styles.recentPostsWrap)}>
				{children}
			</div>
		</div>
	)
}

export default Layout