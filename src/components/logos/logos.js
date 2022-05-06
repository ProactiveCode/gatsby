import * as React from 'react'
import * as Styles from './logos.module.scss'
import c from 'classnames'

const Layout = ({ children, containerSize }) => {
	return (
		<div className={c('container', containerSize, Styles.logosWrap)}>
			{children}
		</div>
	)
}

export default Layout