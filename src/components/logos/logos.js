import * as React from 'react'
import * as Styles from './logos.module.scss'
import c from 'classnames'

const Layout = ({ section }) => {
	const logos = section.content;
	const safeID = section.sectionInfo[0].identifier.replace(/\s+/g, '-').replace("'", '').toLowerCase();
	return (
		<section id={safeID} data-id={section.sectionInfo[0].identifier} className={c("section", section.sectionInfo[0].bgColor, "section_" + section.sectionInfo[0].size)} 
		style={ section.sectionInfo[0].image ? { backgroundImage:  `url("${section.sectionInfo[0].image}")`} : {}}>
			<div className={c('container', 'container' + section.size, Styles.logosWrap)}>
				{
					logos.map((section, i) => (
						<img width={'100%'} key={i} className={Styles.logo} objectFit={'contain'} alt={section.logoAlt} src={section.logoUrl} />
					))
				}
			</div>
		</section>
	)
}

export default Layout