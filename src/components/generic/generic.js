import * as React from 'react'
import * as Styles from './generic.module.scss'
import c from 'classnames'

const Layout = ({ section }) => {
	const safeID = section.sectionInfo[0].identifier.replace(/\s+/g, '-').replace("'", '').toLowerCase();
	return (
		<section id={safeID} data-id={section.sectionInfo[0].identifier} className={c("section", section.sectionInfo[0].bgColor, "section_" + section.sectionInfo[0].size, (section.contentVideo) ? Styles.genericVideo : '', section.extra_class)} 
		style={ section.sectionInfo[0].image ? { backgroundImage:  `url("${section.sectionInfo[0].image}")`} : {}}>
			<div className={c('container', 'container' + section.size, section.extra_global_class, Styles[section.extra_block_class])}>
				{
					(section.contentVideo) ?  <video playsInline="true" loading="lazy" src={section.contentVideo} loop={true} aria-hidden="true" autoPlay={true} muted={true}></video> : ''
				}
				<div className={Styles.genericDiv} dangerouslySetInnerHTML={{__html: section.content}}></div>
			</div>
		</section>
	)
}

export default Layout