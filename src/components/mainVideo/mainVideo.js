import * as React from 'react'
import * as Styles from './mainVideo.module.scss'
import c from 'classnames'

const newHero = ({ section }) => {
  	return (
		<section data-id={section.sectionInfo[0].identifier} className={c("section", section.sectionInfo[0].bgColor, "section_" + section.sectionInfo[0].size)} 
		style={ section.sectionInfo[0].image ? { backgroundImage:  `url("${section.sectionInfo[0].image}")`} : {}}>
			<div className={c(Styles.videoWrap)}>
				<div className={c('container', 'container1000')}>
					<video preload="none" loop={true} aria-hidden="true" autoPlay={true} muted={true} controls={true} src={section.videoLink}></video>
				</div>
			</div>
		</section>
  	)
}

export default newHero