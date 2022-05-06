import * as React from 'react'
import * as Styles from './column.module.scss'
import c from 'classnames'

const Layout = ({ type, children }) => {
	console.log(type);
	const isType = true;
	return (
		<div className={c(Styles.column, Styles[type])}>
			{children}
		</div>
	)
}
export default Layout