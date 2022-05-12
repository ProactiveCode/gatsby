import * as React from 'react'
import * as Styles from './generic.module.scss'
import c from 'classnames'

const Layout = ({ section }) => {
	return (
		<section data-id={section.sectionInfo[0].identifier} className={c("section", section.sectionInfo[0].bgColor, "section_" + section.sectionInfo[0].size)} 
		style={ section.sectionInfo[0].image ? { backgroundImage:  `url("${section.sectionInfo[0].image}")`} : {}}>
			<div className={c('container', 'container' + section.size, section.extra_global_class, Styles[section.extra_block_class])}>
				<div dangerouslySetInnerHTML={{__html: section.content}}></div>
			</div>
		</section>
	)
}

export default Layout