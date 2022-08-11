import * as React from 'react'
import * as Styles from './floating.module.scss'
import c from 'classnames'

const Layout = ({ section }) => {
	const safeID = section.sectionInfo[0].identifier.replace(/\s+/g, '-').replace("'", '').toLowerCase();
	return (
		<section id='floatingContact' className={c(Styles.floatingBtn)}>
			<a href={section.link} className={c('btn', 'btn--pink-glow')}>{section.btnText}</a>
		</section>
	)
}

export default Layout