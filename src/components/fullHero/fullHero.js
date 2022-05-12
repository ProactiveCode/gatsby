import * as React from 'react'
import * as Styles from './fullHero.module.scss'
import c from 'classnames'

const FullHero = ({ section }) => {
  	return (
		<section data-id={section.sectionInfo[0].identifier} className={c(section.sectionInfo[0].bgColor)} 
		style={ section.sectionInfo[0].image ? { backgroundImage:  `url("${section.sectionInfo[0].image}")`} : {}}>
			<div className={c(Styles.fullHero)}>
				<video loading="lazy" src={section.contentVideo} loop={true} aria-hidden="true" autoPlay={true} muted={true}></video>
				<img src={section.contentImage} alt={section.contentImageAlt} loading="lazy"></img>
			</div>
		</section>
  	)
}

export default FullHero