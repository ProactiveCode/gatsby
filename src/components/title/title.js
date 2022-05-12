import * as React from 'react'
import * as Styles from './title.module.scss'
import c from 'classnames'

const Layout = ({ section }) => {
	return (
		<section data-id={section.sectionInfo[0].identifier} className={c("section", section.sectionInfo[0].bgColor, "section_" + section.sectionInfo[0].size)} 
		style={ section.sectionInfo[0].image ? { backgroundImage:  `url("${section.sectionInfo[0].image}")`} : {}}>
			<div className={c(Styles.title, Styles["line_" + section.line], Styles[section.alignment])}>
				<div className={c('container', 'container' + section.containerSize, Styles[section.alignment])}>
					<div dangerouslySetInnerHTML={{__html: section.content}}></div>
				</div>
			</div>
		</section>
	)
}

export default Layout