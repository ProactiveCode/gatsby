import * as React from 'react'
import * as Styles from './twoCol.module.scss'
import c from 'classnames'

const Layout = ({ containerSize, children }) => {

	return (
		<div className={c(Styles.twoCol, "container", containerSize)}>
			{children}
		</div>
	)
}

export default Layout