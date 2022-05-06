import * as React from 'react'
import * as Styles from './title.module.scss'
import c from 'classnames'

const Layout = ({ line, children, containerSize, align }) => {
	return (
		<div className={c(Styles.title, Styles[line], Styles[align])}>
			<div className={c('container', containerSize, Styles[align])}>
				{children}
			</div>
		</div>
	)
}

export default Layout