import * as React from 'react'
import c from 'classnames'
import * as Styles from './section.module.scss'

const Layout = ({ identifier, bgcolour, children, bgImage, smaller }) => {

	return (
		<section data-id={identifier} className={c("section", Styles.section, bgcolour, Styles[smaller])} 
		style={ bgImage ? { backgroundImage:  `url("${bgImage}")`} : {}}>
			{children}
		</section>
	)
}

export default Layout